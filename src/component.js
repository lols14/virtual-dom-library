import {vdom} from './vdom.js'

class $Dom {
  constructor(){
    this['$dom'] = {
      vdomRef : {}
    }
  }

  setvRef(node){
    this['$dom'].vdomRef = node
  }

  getTree(){
    return this.template();
  }

  // updateTree(){
  //   return this.getTree()
  // }

}

class Component extends $Dom{
  constructor(){
    super()
    this.state = {}
  }

  setState(state){
    if (state != this.state) {
      this.state = state
      let oldTree = this.$dom.vdomRef
      let newTree = this.getTree()
      vdom.diff(oldTree, newTree)
    }
  }

}


export {Component}
