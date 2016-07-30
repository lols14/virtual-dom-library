import {vdom} from './vdom.js'

export default class Node {

  constructor (selector,props,childNodes = []){
    this.tagName = selector
    this.props = props || {}
    this.hash = hash({selector, props})
    this.childNodes = childNodes;
  }

  create (){
    let elem = createNode(this)
    this.propsPipe(elem)
    return elem
  }

  propsPipe (elem) {
    if (this.props) {
      this.stylePipe(elem)
      this.handlerPipe(elem)
      this.valuePipe(elem)
    }
  }

  stylePipe (elem){
    for (let prop in this.props.style){
      elem.style[prop] = this.props.style[prop]
    }
  }

  handlerPipe (elem){
    const handlers = ['onclick']
    for (let handler of handlers){
      if(this.props[handler]){
        elem[handler] = this.props[handler]
      }
    }
  }

  valuePipe (elem){
    elem.textContent = this.props.value
  }
}

function createNode(node){
  return document.createElement(node.tagName)
}

function noop(){}
