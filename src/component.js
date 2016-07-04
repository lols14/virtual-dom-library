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
  addvRef(node){
    this['$dom'].vdomRef = node
  }
  addrRef(node){
    this['$dom'].rdomRef = node
  }
  getTree(){
    let template = this.template();
    return template
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
