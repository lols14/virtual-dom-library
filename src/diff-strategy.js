
export let diffStrategy = {
  basic : basic
}


function basic(oldTree, newTree){
  let exist = existPipe(oldTree,newTree)
  if (exist) {
    let props = newTree.props
    styleDiff(oldTree,props)
    handlerDiff(oldTree,props)
    valueDiff(oldTree,props)
  }
}

function existPipe(oldTree,newTree){
  if (oldTree && newTree) {
    return true
  }else {
    return false
  }
}

function styleDiff(oldTree, props){
  if (props.style) {
    oldTree.ref.setAttribute('style', '')
    oldTree.props.style = props.style
    oldTree.stylePipe(oldTree.ref)
  }
}

function handlerDiff(){}
function valueDiff(){}
function childDiff(oldTree,newTree){
  console.log(oldTree.childNodes);
  console.log(newTree.childNodes);
}

export {diffStrategy}
