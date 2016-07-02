import {bootstrap} from '../bootstrap.js'
import {Component} from '../component.js'
import {factory} from '../creater.js'
import {BasicComponent} from './basic-component.js'
import {ExtendedComponent} from './extended-component.js'

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



//
// let h1 = factory.createElement('h1', {style: h1Style, value : 'Hello world'})
// let inner = factory.createElement('div', {style:innerStyle},h1)
// let inner1 = factory.createElement('div', {style:innerStyle},h1)
// let inner2 = factory.createElement('div', {style:innerStyle},h1)
// let inner3 = factory.createElement('div', {style:innerStyle},h1)
// let inner4 = factory.createElement('div', {style:innerStyle},h1)
// let outer = factory.createElement('div', {style:outerStyle,onclick:function(){console.log('hello world')}},inner4,inner3,inner2,inner1,inner)
