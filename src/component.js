import {vdom} from './vdom.js'

class $Dom {
  constructor(){
    this['$dom'] = {
      indexes : [],
      vdomRef : {}
    }
  }
  addIndex(index,nodeRef){
    this['$dom'].indexes.push(index)
  }
  addRef(node){
    this['$dom'].vdomRef = node
  }
}

class Component extends $Dom{
  constructor(){
    super()
    this.state = {}
  }
  setState(state){
    vdom.changeState(state,this)
  }
}


export {Component}
