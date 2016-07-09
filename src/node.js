import {vdom} from './vdom.js'

export default class Node {

  constructor (selector,props,childNodes = []){
    this.tagName = selector
    this.props = props || {}
    this.childNodes = childNodes;
  }

  create (){
    let elem = createNode(this)
    propsPipe.call(elem,this.props)
    return elem
  }

}

function createNode(node){
  return document.createElement(node.tagName)
}

// function ownerPipe(owner,props,parent){
//   owner.addrRef(this)
//   owner.addIndex(props.index,this)
// }

function childPipe(child,owner){
  child.length > 0 ? vdom.indexing(true) : noop()
  child.forEach((node) => {
    if(Object.getPrototypeOf(node) == Component){
      vdom.buildComponent(node,this)
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

function noop(){}
