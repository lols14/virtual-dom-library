let dom

let vdom = {
  init : init,
  changeState : changeState,
  indexing : counter(),
  buildComponent : buildComponent
}

function init(root){
  return buildComponent(root)
}

function changeState(state,component){
  console.log(state,component);
}

function buildComponent(Component,element){
  let builded = new Component()
  let template = builded.template()
  builded.addRef(template)
  return template.build(builded,element)
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
