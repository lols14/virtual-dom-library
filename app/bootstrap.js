import {vdom} from './vdom.js'

var bootstrap = function(component,root){
  let rdom = vdom.init(component)
  root.appendChild(rdom)
}



export {bootstrap}
