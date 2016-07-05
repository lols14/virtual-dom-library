import {Component} from './component.js'

let dom

let vdom = {
  init : init,
  changeState : changeState,
  indexing : counter()

}

function init(root){
  let node = buildNode(root)
  let roots = node
  node.root = 'true'

  if (node.childNodes.length == 0) return
  traversing(node)
}
function traversing(tree){
  let stack = []
  let depth = 0
  let node = tree

  while (loopCondition(node,stack)){
    let index, parent, traverseBack, traversedAllChildOnCurrentLevel
    stack[depth] ? index = stack[depth].index : index = 0
    traverseBack = stack[depth] && !node

    if (traverseBack) {

      parent = stack[depth].parent
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
        node = buildNode(node)
        parent.childNodes[index] = node
        stackPush(stack,index,parent)
        depth ++

      } else {

        depth--

      }
    }
  }
  console.log(tree);
  return tree
}

function stackPush(stack,index,parent){
  if (index > 0) {
    stack.pop()
  }
  stack.push({index:index, parent:parent})
}

function loopCondition(node, stack){
  if (!node && stack.length == 0) {
    return false
  }
  return true
}

function parentInit(node,index){
  if (index > 0) {
    node = buildNode(node)
  }
  return node
}



function buildNode(node,element){
    return buildVNode(node)
}

function buildVNode(node){
  if (node == null) {
    return
  }else if(Object.getPrototypeOf(node) == Component){
    node = new node().getTree()
  }
  return node
}

function buildRNode(node){
  return node.create()
}

function changeState(state,component){
  console.log(component);
  console.log(dom);
}

export {vdom}
