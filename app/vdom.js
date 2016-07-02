let dom
let vdom = {
  init : init,
  changeState : changeState
}

function init(nodeTree){
  dom = nodeTree
  return nodeTree.build()
}

function changeState(state,component){
  console.log(dom);
}

export {vdom}
