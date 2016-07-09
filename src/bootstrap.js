import {vdom} from './vdom.js'

var bootstrap = function(component,root){
  let rdom = vdom.init(component)
  console.log(rdom);
  root.appendChild(rdom)
}



export {bootstrap}
