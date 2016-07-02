import {Component} from '../component.js'
import {factory} from '../creater.js'

let outerStyle = {
  backgroundColor : 'blue',
  width : '100%',
  height : '100%',
  cursor : 'pointer'
}
let innerStyle = {
  backgroundColor : 'yellow',
  width : '100%',
  height : '100px'
}
let h1Style = {
  fontSize : '40px',
  textAlign : 'center',
  color : 'white'
}

class BasicComponent extends Component {
   constructor(){
     super()
     this.state = {
       outer : outerStyle,
       inner : innerStyle,
       h1 : h1Style
     }
     this.basic = 'Basic'
   }
  clickHandler(e){
    console.log(this);
    this.setState({
      inner:{backgroundColor:'green'}
    })
  }

  template (){
    let template
    template =
    factory.createElement('div', {style:this.state.outer,onclick:this.clickHandler.bind(this)},
      factory.createElement('div', {style:this.state.inner},
        factory.createElement('h1', {style: this.state.h1, value : 'Hello basic'}
        )
      )
    )
    return template
  }
}
export {BasicComponent}
