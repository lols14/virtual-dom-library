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
  let roots = node
  let done = false
  node.root = 'true'
  let depth = 0
  if (node.childNodes.length == 0) {
    return
  }
  while (!done){
    let index, parent
    stack[depth] ? index = stack[depth].index : index = 0
    console.log(stack.length, node);
    if (!node && stack.length == 0) {
      done = true
      break
    }
    if (stack[depth] && !node) {
      if(index == stack[depth].parent.childNodes.length -1){
        depth --
        stack.pop()
      } else {
        index =  ++stack[depth].index
        node = buildNode(stack[depth].parent.childNodes[index])
        stack[depth].parent.childNodes[index] = node
        depth++
      }
    }else {
      parent = node
      node = node.childNodes[index]
      node = buildNode(node)
      if (node != null) {
        parent.childNodes[index] = node
        stack.push({index:index,parent:parent})
        depth ++
      }else{
        depth--
      }
    }
  }
  console.log(roots);
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
