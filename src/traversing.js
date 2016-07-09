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
  let node = buildVNode(options.root)
  if (options.init) {
    node.root = true
  }
  let vDom = node
  let handler = (options.handler || noop).bind(options.handlerResult)
  traversingLoop(node,handler)
  return {vDom, handlerResult : options.handlerResult}
}

function traversingLoop(node,handler){
  let stack = []
  let depth = 0
  handler({node:node})

  while (traversingCondition(node,stack)){
    let index, parent, traverseBack, traversedAllChildOnCurrentLevel, iterProps

    stack[depth] ? index = stack[depth].index : index = 0
    traverseBack = stack[depth] && !node

    if (traverseBack) {

      parent = stack[depth].parent.v
      traversedAllChildOnCurrentLevel = index == parent.childNodes.length - 1

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
        node = buildVNode(node)
        parent.childNodes[index] = node
        iterProps = propsInit(node,stack,depth,index,parent)
        indexing(iterProps)
        stackPush(iterProps)
        handler(iterProps)
        depth ++

      } else {

        depth--

      }
    }
  }
}

function stackPush(props){
  if (props.index > 0) {
    props.stack.pop()
  }
  props.stack.push({index:props.index, parent:{ v:props.parent}})
}

function traversingCondition(node, stack){
  if (!node && stack.length == 0) {
    return false
  }
  return true
}

function propsInit(node,stack,depth,index,parent){
  return {node,stack,depth,index,parent}
}

function indexing(props){
  let index
  if (props.node && !props.node.index){
    index = [props.depth,props.index]
    props.node.index = index.join('.')
  }
}

function buildVNode(node){
  if (node == null) {
    return
  }else if(Object.getPrototypeOf(node) == Component){
    node = new node().getTree()
  }
  return node
}



export {traverseMediator}
