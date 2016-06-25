var bootstrap = function(tree,root){
  let fragment = document.createDocumentFragment()
  parser(tree, fragment)
  root.appendChild(fragment)
}

var parser = function(tree, dest){
  if (tree.length == 0){
    return
  }
  for (let node of tree){
    let element = nodeFactory(node)
    dest.appendChild(element)
    if (node.child){
      parser(node.child, element)
    }
  }
}



export {bootstrap}
