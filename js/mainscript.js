import {cursor} from './cursor.js'
import {parallax} from './parallax.js'
import { animateHeader } from './header.js';

document.addEventListener('DOMContentLoaded',startJs)

function startJs(){
    animateHeader()
    document.addEventListener('mousemove', cursor);
    window.addEventListener('scroll',parallax);    
}

