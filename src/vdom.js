import {traverseMediator} from './traversing'
let dom
let vdom = {
  init : init,
  changeState : changeState
}

function init(root){
  let traverseResult
  traverseResult = traverseMediator({init:true, root:root, handler:initRDom, handlerResult:{}})
  return traverseResult.handlerResult.root
}

function parentInit(node,index){
  if (index > 0) {
    node = buildNode(node)
  }
  return node
}


function initRDom(options){
  let domNode
  let {node} = options
  if (node.root) {
    this.root = node.create()
    this.parent = this.root
    node.ref = this.root
  } else {
    domNode = node.create()
    node.parent.ref.appendChild(domNode)
    node.ref = domNode
  }
}

function changeState(state,component){
  console.log(component);
  console.log(dom);
}



export {vdom}
