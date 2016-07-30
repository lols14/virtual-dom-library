import {Component} from './component'
import {diffService} from './_diff'
import {patchService} from './_patch'

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

function diffRecursion(oldTree, newTree, oldTreeParent){
  let patch
  let length
  let index
  patch = diffService.diff(oldTree, newTree, oldTreeParent)
  patchService.patch(patch, oldTree, newTree)
  if (oldTree && newTree) {
    let oldArr = oldTree.childNodes
    let newArr = newTree.childNodes
    length = oldArr.length > newArr.length
      ? length = oldArr.length
      : length = newArr.length
      index = 0
      while (index<length){
        diffRecursion(oldArr[index],newArr[index],oldArr)
        index++
      }
  }
}

function setParent(node, parent){
  if (parent) {
    node.parent = parent
  }
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
