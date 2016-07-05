import {bootstrap} from '../bootstrap.js'
import {Component} from '../component.js'
import {factory} from '../creater.js'
import {BasicComponent} from './basic-component.js'
import {ExtendedComponent} from './extended-component.js'

let blockStyle = {
  width:'100px',
  height:'100px',
  backgroundColor:'black'

}

class RenderComponent extends Component{
  template(){
    let template =
    factory.createElement('div1',null,
      BasicComponent,
      ExtendedComponent
    )
    return template
  }
}

let root = document.getElementById('root');

bootstrap(RenderComponent, root)


// factory.createElement('div', {style:blockStyle,onclick:this.click.bind(this)})

//
// let h1 = factory.createElement('h1', {style: h1Style, value : 'Hello world'})
// let inner = factory.createElement('div', {style:innerStyle},h1)
// let inner1 = factory.createElement('div', {style:innerStyle},h1)
// let inner2 = factory.createElement('div', {style:innerStyle},h1)
// let inner3 = factory.createElement('div', {style:innerStyle},h1)
// let inner4 = factory.createElement('div', {style:innerStyle},h1)
