import {bootstrap} from './core.js'
import {factory} from './creater.js'

let outerStyle = {
  backgroundColor : 'green',
  width : '100%',
  height : '600px'
}
let innerStyle = {
  backgroundColor : 'yellow',
  width : '100%',
  height : '500px'
}
let h1Style = {
  fontSize : '40px',
  textAlign : 'center',
  color : 'white'
}

let root = document.getElementById('root');
let h1 = factory.createElement('h1', {style: h1Style, value : 'Hello world'})
let inner = factory.createElement('div', {style:innerStyle},h1)
let outer = factory.createElement('div', {style:outerStyle,onclick:function(){console.log('hello world')}},inner)

root.appendChild(outer)
// bootstrap(outer, root)
