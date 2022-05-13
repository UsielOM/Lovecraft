import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimacionService {

  constructor() { }
}

let intro = document.querySelector('.intro');
intro:HTMLDivElement
// container.querySelector('.intro')
window.addEventListener('DOMContenrLoaded', () =>{
  setTimeout(() =>{
 intro.style.top ="-100vh";
  }, 2300);
})
