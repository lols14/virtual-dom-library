import {vdom} from './vdom.js'

class $Dom {
  constructor(){
    this['$dom'] = {
      indexes : [],
      vdomRef : {}
    }
  }

  setvRef(node){
    this['$dom'].vdomRef = node
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
    console.log(state,this.state);
    if (state != this.state) {
      console.log(true);
    }
    vdom.changeState(state,this)
  }
}


export {Component}
