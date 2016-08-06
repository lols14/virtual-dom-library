## Virtual-dom-library
Element
```
factory.createElement('div', {style:this.state.outer,onclick:this.clickHandler.bind(this)},
  factory.createElement('div', {style:this.state.inner},
    factory.createElement('h1', {style: this.state.h1, value : 'Hello from Element'}
    )
  )
)
```


Component 
```
import {Component} from '../component.js'
import {factory} from '../creater.js'

class BasicComponent extends Component {
	constructor (){
    	this.state = {
     		value : "hello world
            styles : {backgroundColor:'green', color:'white'}
    	}
    }

	template(){
    	return factory.createElement('div', {style:this.state.styles,value:this.state.value},
    }
```
There is only one difference between the element and the component.
Component is **statefull**, element - **stateless**.

When Component inited by bootstrap function
```
import {bootstrap} from '../bootstrap.js'
import {BasicComponent} from './basic-component.js'
import {ExtendedComponent} from './extended-component.js'
let root = document.getElementById('root');

class RenderComponent extends Component{
  template(){
    return factory.createElement('div',{},
      BasicComponent,
      ExtendedComponent
    )
  }
}

bootstrap(RenderComponent, root)

```

