import {Component} from './component.js'
import {vdom} from './vdom.js'

export default class Node {

  constructor (selector,props,childNodes = []){
    this.tagName = selector
    this.props = props || {}
    this.childNodes = childNodes;
  }

  build (owner,parent){
    let elem = createNode(this)
    ownerPipe.call(elem,owner,this.props)
    propsPipe.call(elem,this.props)
    childPipe.call(elem,this.childNodes,owner)
    return append.call(elem,parent)
  }
}
function createNode(node){
  node.props.index = vdom.indexing()
  return document.createElement(node.tagName)
}

function ownerPipe(owner,props){
  owner.addIndex(props.index,this)
}

function childPipe(child,owner){
  child.forEach((node) => {
    if(Object.getPrototypeOf(node) == Component){
      let component = new node()
      let template = component.template()
      template.build(component,this)
    }else{
      node.build(owner,this)
    }
  })
}

function propsPipe (props) {
  if (props) {
    this.setAttribute('index',props.index)
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

function append (parent){
  if (!parent) {
    return this
  }
  if (parent) {
    parent.appendChild(this)
  }
}
