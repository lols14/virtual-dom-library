let dom
let vdom = {
  init : init,
  changeState : changeState,
  indexing : counter()
}



function init(root){
  return build(root)
}

function changeState(state,component){
  console.log(dom);
}

function build(root){
  let rootComponent = new root()
  let rootTemplate = rootComponent.template()
  return rootTemplate.build(rootComponent)
}

function counter(){
  let index = 0
  return function(){
    return index++
  }
}

export {vdom}
