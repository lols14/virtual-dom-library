
let diffService = {
  diff : diff
}

function diff (oldNode, newNode){
  let result = { props : {}, node : {} }
  nodeDiff(oldNode,newNode, result)

  if (oldNode && newNode) {
    propsDiff(oldNode,newNode, result)
  }
  return result
}

function nodeDiff(oldNode, newNode, result){
  let addCase = !oldNode && newNode
  let deleteCase = oldNode && !newNode
  if (addCase) {
    console.log('hello add case');
  }
  if (deleteCase) {
    nodeDelete(oldNode, newNode)
  }
}

function nodeDelete(oldNode, newNode) {
  let oldParent = oldNode.parent
  let newParent = newNode.parent
  oldParent.childNodes.map( (node, index) =>{
    console.log(node,index);
  })
}

function propsDiff(oldNode, newNode, result){
  styleDiff(oldNode, newNode, result)
  valueDiff(oldNode ,newNode, result)
}

function styleDiff(oldNode, newNode, result){
  let diff = deepDiff.diff(oldNode.props.style, newNode.props.style)
  if (diff) {
    result.props.style = diff.reduce(diffreducer, {D:{},E:{}} )
  }
}

function valueDiff(oldNode, newNode, result){
  let diff = deepDiff.diff(oldNode.props.value, newNode.props.value)
  if (diff) {
    result.props.value = diff.reduce(diffreducer, {D:{},E:{}} )
  }
}


function diffreducer (accum, item){
    let prop = item.path[0]
    console.log(accum,item);
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
