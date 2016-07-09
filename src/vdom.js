import {traverseMediator} from './traversing'
let dom
let vdom = {
  init : init,
  changeState : changeState
}

function init(root){
  let traverseResult
  traverseResult = traverseMediator({init:true, root:root})
  console.log(traverseResult);
}
// , handler:initRDom, handlerResult:{}
function parentInit(node,index){
  if (index > 0) {
    node = buildNode(node)
  }
  return node
}


function initRDom(options){
  if(options.node){
    if (options.node.root == true) {
      this.DOM = options.node.create()
      options.node.ref = this.DOM
      this.parent = this.DOM
    }else{
      let domNode = options.node.create()
      this.parent.appendChild(domNode)
      this.parent = domNode
    }
  }
}

function changeState(state,component){
  console.log(component);
  console.log(dom);
}


function noop() {}

export {vdom}
