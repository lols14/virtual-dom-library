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
  let vDom = node
  if (options.init) node.root = true
  handler({node,stack,depth})
  traversingLoop(node,handler,stack,depth)
  return {vDom, handlerResult : options.handlerResult}
}

function traversingLoop(node,handler,stack,depth){

  while (traversingCondition(node,stack)){
    let index, parent, traverseBack, traversedAllChildOnCurrentLevel, iterProps
    stack[depth] ? index = stack[depth].index : index = 0
    traverseBack = stack[depth] && !node
    if (traverseBack) {

      parent = stack[depth].parent.v
      traversedAllChildOnCurrentLevel = (index == parent.childNodes.length - 1 || parent.childNodes.length == 0)

      if(traversedAllChildOnCurrentLevel){

        depth --
        stack.pop()

      } else {

        node = parent
        stack[depth].index++

      }

    } else {

      if ( node  ) {

        parent = node
        node = node.childNodes[index]
        if(node){
          node = buildVNode(node)
          node.parent = parent
          parent.childNodes[index] = node
        }
        iterProps = propsInit(node,stack,depth,index,parent)
        indexing(iterProps)
        handler(iterProps)
        stackPush(iterProps)
        depth ++

      } else {

        depth--

      }
    }
  }
}

function stackPush(props){
  let {parent,index,node} = props
  if (props.index > 0) {
    props.stack.pop()
  }
  props.stack.push({parent,index,node})
}

function traversingCondition(node, stack){
  if (!node && stack.length == 0) {
    return false
  }
  return true
}

function propsInit(node,stack,depth,index,parent){
  return {node,stack,depth,index,parent:{v:parent}}
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
    node = new node().getTree()
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



export {traverseMediator}
