import {vdom} from './vdom.js'

class $Dom {
  constructor(){
    this['$dom'] = {
      indexes : []
    }
  }
  addIndex(index,nodeRef){
    this['$dom'].indexes.push({index:index,ref:nodeRef})
  }
}

class Component extends $Dom{
  constructor(){
    super()
    this.state = {}
  }
  setState(state){
    this.state = state
    vdom.changeState(state,this)
  }
}


export {Component}
