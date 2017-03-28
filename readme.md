## Virtual-dom-library

It is educational project

Element
``` javascript
factory.createElement('div', { style:this.state.outer, onclick:this.clickHandler.bind(this) },
  factory.createElement('div', { style:this.state.inner },
    factory.createElement('h1', { style: this.state.h1, value : 'Hello from Element' }
    )
  )
)
```


Component 
``` javascript
import {Component} from '../component.js'
import {factory} from '../creater.js'

class BasicComponent extends Component {
	constructor (){
    	this.state = {
     		value : "hello world"
            styles : {backgroundColor:'green', color:'white'}
    	}
    }
    
	handler () {
		alert('foobar')
	}
	
	template(){
    	return factory.createElement('div', { onclick:this.handler, style:this.state.styles, value:this.state.value },
    }
```
There is only one difference between the element and the component.
Component is **statefull**, element - **stateless**.

When Component inited by bootstrap function
``` javascript
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

Each Element && Component is represented in such structure
``` javascript
  childNodes:Array[2]
  hash:"3d916d8725b1877560c073f15148af160f7d494d"
  props:Object
  ref:div
  tagName:"div"
```



