// import {virtualDom} from './virtual-dom.js';

var factory = {
  createElement : createElement
}

function createElement (selector, props, ...innerElems) {
    let element = document.createElement(selector)
    propsPipe.call(element,props)
    appendPipe.call(element,innerElems)
    return element
}

var propsPipe = function(props){
  stylePipe.call(this,props)
  handlerPipe.call(this,props)
  valuePipe.call(this,props)
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

export {factory}
