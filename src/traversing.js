import {Component} from './component'

/**
 * traversing by virtual tree
 *
 * @param     {object}        options
 * @property  {node}          root
 * @property  {function}      handler
 * @property  {object}        handlerResult
 * @return    {object}
 */

function traverseMediator(options){
  let stack = []
  let depth = 0
  let node = buildVNode(options.root)
  let handler = handlerPrepare(options.handler.bind(options.handlerResult) || noop)
  let vdom = node
  if (options.init) node.root = true
  handler({node,stack,depth})
  traversingLoop({node,handler,stack,depth})
  return {vdom, handlerResult : options.handlerResult}
}

function traversingCondition(node, stack){
  if (!node && stack.length == 0) {
    return false
  }
  return true
}

function traversingLoop(props){
  let {stack} = props
  while (traversingCondition(props.node,stack)){
    // debugger
    let traverseBack
    stack[props.depth] ? props.index = stack[props.depth].index : props.index = 0
    traverseBack = stack[props.depth] && !props.node
    if (traverseBack) {
      goBack(props)
    } else {
      goForward(props)
    }
  }
  function goBack(props){
    let parent,traversedAllChildOnCurrentLevel
    parent = props.stack[props.depth].parent.v
    traversedAllChildOnCurrentLevel = (props.index == parent.childNodes.length - 1 || parent.childNodes.length == 0)
    if(traversedAllChildOnCurrentLevel){
      props.depth --
      props.stack.pop()
    } else {
      props.node = parent
      stack[props.depth].index++
    }
  }
  function goForward(props){
    let iterProps,parent
    if (props.node) {
      parent = props.node
      props.node = props.node.childNodes[props.index]
      if(props.node){
        props.node = buildVNode(props.node)
        props.node.parent = parent
        parent.childNodes[props.index] = props.node
      }
      iterProps = propsInit(props,parent)
      indexing(iterProps)
      props.handler(iterProps)
      stackPush(iterProps)
      props.depth ++
    } else {
      props.depth--
    }
  }
}

function propsInit(props,parent){
  let {node,stack,depth,index} = props
  return {node,stack,depth,index,parent:{v:parent}}
}

function stackPush(props){
  let {index,node,parent} = props
  if (props.index > 0) {
    props.stack.pop()
  }
  props.stack.push({parent,index,node})
}

function indexing(props){
  let index
  if (props.node && !props.node.index){
    index = [props.depth,props.index]
    props.node.index = index.join('.')
  }
}

function buildVNode(node){
  if(Object.getPrototypeOf(node) == Component){
    let component = new node()
    node = component.getTree()
    component.setvRef(node)
  }
  return node
}

function handlerPrepare(handler){
  let origin = handler
  return function(props){
    let node = props.node
    if (node && !node.ref) {
      origin(props)
    }
  }
}

function noop(){}

export {traverseMediator}
