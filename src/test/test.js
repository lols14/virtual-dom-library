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
    factory.createElement('div',null,
      BasicComponent,
      ExtendedComponent
    )
    return template
  }
}

let root = document.getElementById('root');

bootstrap(RenderComponent, root)
