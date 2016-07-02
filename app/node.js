import {Component} from './component.js'

export default class Node {

  constructor (selector,props,childNodes = []){
    this.tagName = selector
    this.props = props || {}
    this.childNodes = childNodes.map((item) => {
      if(Object.getPrototypeOf(item) == Component){
        item = new item().template()
      }
      return item
    })
  }

  build (parent){
    let elem
    this.props.index = globalindex
    elem = document.createElement(this.tagName)
    propsPipe.call(elem,this.props)
    this.childNodes.forEach((node) => {
      node.build(elem,++globalindex)
    })
    if (!parent) {
      return elem
    }
    if (parent) {
      parent.appendChild(elem)
    }
  }
}
let globalindex = 0


function indexing(){

}

function propsPipe (props) {
  if (props) {
    this.setAttribute('index',props.index)
    stylePipe.call(this,props)
    handlerPipe.call(this,props)
    valuePipe.call(this,props)
  }
}

var stylePipe = function (props){
  for (let prop in props.style){
    this.style[prop] = props.style[prop]
  }
}

var handlerPipe = function(props){
  const handlers = ['onclick']
  for (let handler of handlers){
    if(props[handler]){
      this[handler] = props[handler]
    }
  }
}

var valuePipe = function (props){
  this.textContent = props.value
}

var appendPipe = function(innerElems){
  if (innerElems) {
    for (let item of innerElems){
      this.appendChild(item)
    }
  }
}
