## Virtual-dom-library

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
