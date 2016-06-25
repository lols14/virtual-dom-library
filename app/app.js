import {virtualDom} from './virtual-dom.js';
import {bootstrap} from './core.js'
let root = document.getElementById('root');

bootstrap(virtualDom, root)
