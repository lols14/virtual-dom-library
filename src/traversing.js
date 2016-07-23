import {Component} from './component'
import {diffStrategy} from './diff-strategy'

let settings = {
  floorIndex : 0
}

function traverseMediator(options) {
  let tree
  switch (options.type) {
    case 'init':
      tree = initRecursion(options.root)
      break;
    case 'diff':
      tree =  diffRecursion(options.oldTree, options.newTree)
      break;
  }
  return tree
}


function initRecursion(node, parent) {
  let vNode, rNode, nodes
  vNode = buildVNode(node)
  setParent(vNode, parent)
  rNode = vNode.create();
  vNode.ref = rNode
  vNode.childNodes = vNode.childNodes.map((childNode,index) => {
    nodes = initRecursion(childNode, vNode)
    rNode.appendChild(nodes.rNode)
    return nodes.vNode
  })
  return {vNode, rNode}
}

function diffRecursion(oldTree, newTree){
    diffStrategy.basic(oldTree,newTree);
    diffChildRecursion(oldTree,newTree)
}

function diffChildRecursion(oldTree,newTree){
  let oldLength = oldTree.childNodes.length
  let newLength = newTree.childNodes.length
  let length =  oldLength > newLength ? oldLength : newLength
  while (length) {
    debugger
    oldTree = oldTree.childNodes[length-1]
    newTree = newTree.childNodes[length-1]
    diffRecursion.basic(oldTree,newTree)
    length--
  }
}

// function indexing(node){
//   let index
//   if (node.parent) {
//     index = node.parent.index + '.' + settings.floorIndex++
//   }else {
//     index = '0'
//   }
//   node.index = index
// }
// function resetFloorIndex(){
//   settings.floorIndex = 0
// }

function setParent(node, parent){
  if (parent) {
    node.parent = parent
  }
  // indexing(node)
}

function buildRNode(node){
  return node.create();
}

function buildVNode(node){
  if(Object.getPrototypeOf(node) == Component){
    let component = new node()
    node = component.getTree()
    component.setvRef(node)
  }

  return node
}

function noop() {}

export {
  traverseMediator
}
