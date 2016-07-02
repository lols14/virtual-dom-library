import {vdom} from './vdom.js'

var bootstrap = function(tree,root){
  tree = new tree().template()
  let rdom = vdom.init(tree)
  root.appendChild(rdom)
}



export {bootstrap}
