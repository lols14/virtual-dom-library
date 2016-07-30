import {traverseMediator} from './_traversing'

let patchService = {
  patch : patch
}

function patch (patch,oldNode,newNode,oldNodeParent){
  stylePatch(patch,oldNode)
  valuePatch(patch,oldNode)
  nodeDeletePatch(patch,oldNode)
  nodeAddPatch(patch,newNode,oldNodeParent)
}

function stylePatch(patch,oldNode){
  if (patch.style) {
    let nodeStyles = oldNode.ref.style
    let del = patch.style.D
    let edit = patch.style.E

    for (let prop in del) {
      nodeStyles[prop] = ''
    }

    for(let prop in edit){
      nodeStyles[prop] = edit[prop]
    }
  }
}

function valuePatch(patch,oldNode){
  if (patch.value) {
    oldNode.ref.textContent = patch.value
  }
}

function nodeDeletePatch(patch,oldNode){
  if (patch.toDelete) {
    oldNode.parent.ref.removeChild(oldNode.ref)
  }
}

function nodeAddPatch(patch,newNode, oldNodeParent){
  if (patch.toAdd) {
    let tree = traverseMediator({type: 'init', root: newNode })
    tree.vNode.parent = oldNodeParent
    oldNodeParent.childNodes.push(tree.vNode)
    oldNodeParent.ref.appendChild(tree.rNode)
  }
}

export {patchService}
