import {traverseMediator} from './traversing'
import {Component} from './component'

let vdom = {
  init : init,
  diff : diff,
  vtree : {},
  rtree : {}
}

function init(root){
  let tree
  tree = traverseMediator({type: 'init', root: root })
  vdom.vtree = tree.vNode
  vdom.rtree = tree.rNode
  console.log(tree);
  return vdom.rtree
}

function diff(oldTree, newTree){
  let tree
  tree = traverseMediator({type:'diff', oldTree, newTree})
}

export {vdom}
