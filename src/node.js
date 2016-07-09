import {vdom} from './vdom.js'

export default class Node {

  constructor (selector,props,childNodes = []){
    this.tagName = selector
    this.props = props || {}
    this.childNodes = childNodes;
  }

  create (){
    let elem = createNode(this)
    propsPipe.call(elem,this.props,this.index)

    return elem
  }

}

function createNode(node){
  return document.createElement(node.tagName)
}

function propsPipe (props,index) {
  if (props) {
    index = index || 'root'
    this.setAttribute('index',index)
    stylePipe.call(this,props)
    handlerPipe.call(this,props)
    valuePipe.call(this,props)
  }
}

function stylePipe (props){
  for (let prop in props.style){
    this.style[prop] = props.style[prop]
  }
}

function handlerPipe (props){
  const handlers = ['onclick']
  for (let handler of handlers){
    if(props[handler]){
      this[handler] = props[handler]
    }
  }
}

function valuePipe (props){
  this.textContent = props.value
}

function noop(){}
