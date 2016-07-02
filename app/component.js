import {vdom} from './vdom.js'

class Component {
  constructor(){
    this.state = {}
  }
  setState(state){
    this.state = state
    vdom.changeState(state,this)
  }
}

export {Component}
