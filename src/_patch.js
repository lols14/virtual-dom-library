let patchService = {
  patch : patch
}

function patch (patch,oldNode,newNode){
  stylePatch(patch,oldNode)
  valuePatch(patch,oldNode)
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
    console.log(patch.value);
    oldNode.ref.textContent = patch.value
  }
}

export {patchService}
