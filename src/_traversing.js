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

function diffRecursion(oldTree, newTree, parent){
  let length,
      oldChildNode,
      newChildNode,
      isDeleted,
      isChanged,
      iterateProps,
      patch

  patch = diffService.diff(oldTree, newTree)
  iterateProps = childArrPrepare(oldTree, newTre)

  while (length > 0){
    oldChildNode = oldTree.childNodes[length -1]
    newChildNode = newTree.childNodes[length -1]
    isChanged = !isDeleted && (oldChildNode.hash != newChildNode.hash)
    // if (isChanged) {
    //   oldChildNode,newChildNode
    //   diffRecursion(oldChildNode, newChildNode)
    // }
    // if (isDeleted) {
    //
    // }
    length --
  }
}


function childArrPrepare(oldTree, newArr) {
  let result = {}
  let oldArr = oldTree.childNodes
  let newArr = newTree.childNodes
  let sameCount = oldArr.length == newArr.length
  let remove = oldArr.length > newArr.length
  let add = oldArr.length < newArr.length

  if (sameCount) {
    result.length = oldArr.length
  }
  if (remove) {
    result.type = 'remove'
    result.length = oldArr.length
  }
  if (add) {
    result.type = 'add'
    result.length = newArr.length
  }
  arrayReshuffle(oldArr, newArr, result.type)
  return result
}

function arrayReshuffle(oldArr, newArr, type){
  let keyMap = []
    type == 'remove'
      ? oldArr.map(handler)
      : newArr.map(handler)

    function handler(item, index){

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
