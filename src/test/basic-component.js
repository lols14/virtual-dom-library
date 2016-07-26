import {Component} from '../component.js'
import {factory} from '../creater.js'

let outerStyle = {
  backgroundColor : 'yellow',
  width : '100%',
  height : '100%',
  cursor : 'pointer'
}
let innerStyle = {
  backgroundColor : 'brown',
  width : '32%',
  display : 'inline-block',
  height : '100px',
  margin : '10px'
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
       h1 : h1Style,
       rows : [
         {name:'item1'},
         {name:'item2'},
         {name:'item3'}]
     }
     this.basic = 'Basic'
   }

  remove (index, item, event){
    let state = _.cloneDeep(this.state)
    state.outer.color = 'red'
    delete state.outer.backgroundColor
    state.rows.splice(index,1)
    this.setState(state)
  }

  template (){
    let rows = this.state.rows.map( (item, index) =>{
       return factory.createElement('div',
          {key:index,
           style:this.state.inner,
           onclick:this.remove.bind(this,index,item)},

          factory.createElement('h1',
              {style: this.state.h1,
               value : item.name}
          )
      )
    })

    let template = factory.createElement('div', {style:this.state.outer}, rows)
    return template
  }
}

export {BasicComponent}
