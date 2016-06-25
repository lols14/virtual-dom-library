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


var nodeFactory = function(node) {
    let element = document.createElement(node.selector)
    element.textContent = node.value
    element.onclick = node.onclick
    styleFactory.call(element, node.style)
    return element
}

var styleFactory = function (style){
  for (let prop in style){
    this.style[prop] = style[prop]
  }
}

export {bootstrap}
