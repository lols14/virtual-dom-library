import Node from './node.js'
import {Component} from './component.js'

let factory = {
  createElement : createElement
}

function createElement (selector, props, ...childNodes) {
  return new Node(selector,props,childNodes)
}


export {factory}
