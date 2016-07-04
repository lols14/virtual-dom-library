import {Component} from './component.js'

let dom

let vdom = {
  init : init,
  changeState : changeState,
  indexing : counter()

}

function init(root){
  let stack = []
  let node = buildNode(root)
  let done = false
  node.root = 'true'
  let depth = 0
  if (node.childNodes.length == 0) {
    return
  }
  while (!done){
    debugger
    let index, parent
    stack[depth] ? index = stack[depth].index : index = 0
    // && stack[depth].parent.childNodes.length - 1 == index
    if (stack[depth-1] && !node) {
      depth --
      stack.pop()
      node = stack[depth-1].parent
    } else if(stack[depth] && node != null){
      node = stack[depth].parent
      stack[depth].index ++
    }else {
      parent = node
      node = node.childNodes[index]
      node = buildNode(node)
      if (node != null) {
        stack.push({index:index,parent:parent})
        depth ++
      }
    }
    if (node != null && node.root) {
      done = true
    }
  }
}
function addToStack(node){
  childNodes
}
function changeState(state,component){
  console.log(component);
  console.log(dom);
}

function buildNode(node,element){
    let vnode
    let rnode
    vnode = buildVNode(node)
    // rnode = buildRNode(vnode)
    return vnode
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


function counter(){
  let level = 0
  let index = 0
  return function(update){
    if (update) {
      level++
      index = 0
    }
    return level+'.'+index++
  }
}


export {vdom}
