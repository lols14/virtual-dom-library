import Node from './node.js'

let factory = {
  createElement : createElement
}

function createElement (selector, props, ...childNodes) {
  if (_.isArray(childNodes[0])) {
    childNodes = childNodes[0]
  }
  return new Node(selector,props,childNodes)
}


export {factory}
