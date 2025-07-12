import {cursor} from './cursor.js'
import {parallax} from './parallax.js'
import { animateHeader } from './header.js';
import {  init3d} from './ThreeLearning.js';

document.addEventListener('DOMContentLoaded',startJs)

function startJs(){
    let cont = document.querySelector('.cont')
    


    // animateHeader()
    document.addEventListener('mousemove', cursor);
    window.addEventListener('scroll',parallax);    
    init3d(cont)
    console.log(cont)
}


