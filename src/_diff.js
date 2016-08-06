
let diffService = {
  diff : diff
}

function diff (oldNode, newNode, oldParent){
  let patch = {}
  let deleteNode = oldNode && !newNode
  let addNode =  newNode && !oldNode
  let nodeDiff = oldNode && newNode

  if (nodeDiff) {
    propsDiff(oldNode,newNode, patch)
    childNodesPrepare(oldNode, newNode, patch)
  }

  if (deleteNode) {
    nodeDelete(patch)
  }

  if (addNode) {
    nodeAdd(patch)
  }

  return patch
}

function childNodesPrepare(oldNode, newNode,patch) {
  let oldArr = oldNode.childNodes
  let newArr = newNode.childNodes
  let move = []
  let temp
  for (var i = 0; i < newArr.length; i++) {
    let newItem = newArr[i]
    for (var j = 0; j < oldArr.length; j++) {
      let oldItem = oldArr[j]
      if (newItem.hash == oldItem.hash && i != j) {
        temp = oldArr[i]
        oldArr[i] = oldItem
        oldArr[j] = temp
        move.push({from:j,to:i })
      }
    }
  }
  if (move.length > 0) {
    patch.moveChild = move
  }
}


function nodeDelete(patch) {
  patch.toDelete = true
}

function nodeAdd(patch){
  patch.toAdd = true
}

function propsDiff(oldNode, newNode, patch){
  if (oldNode.hash != newNode.hash) {
    styleDiff(oldNode, newNode, patch)
    valueDiff(oldNode ,newNode, patch)
  }
}

function styleDiff(oldNode, newNode, patch){
  let diff = deepDiff.diff(oldNode.props.style, newNode.props.style)
  if (diff) {
    patch.style = diff.reduce(diffreducer, {D:{},E:{}} )
  }
}

function valueDiff(oldNode, newNode, patch){
  if (oldNode.props.value != newNode.props.value){
    patch.value = newNode.props.value
  }
}


function diffreducer (accum, item){
    let prop = item.path[0]
    switch (item.kind) {
      case 'D':
        let valueD = item.lhs
        accum.D[prop] = valueD
        break
      default :
        let valueE = item.rhs
        accum.E[prop] = valueE
        break
    }
    return accum
}



export {diffService}
