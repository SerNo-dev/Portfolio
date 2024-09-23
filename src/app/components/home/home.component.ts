import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  

  @ViewChild('multipleText') multipleText!: ElementRef;

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.home-content, .heading', {
      origin: 'top',      
      distance: '80px',      
     // reset: true,           
      delay: 200             
    });
    ScrollReveal().reveal('.home-content h1', {
      origin: 'left',      
      distance: '80px',      
     // reset: true,           
      delay: 200             
    });

    ScrollReveal().reveal('.card-container', {
      origin: 'bottom',      
      distance: '80px',      
     // reset: true,           
      delay: 200             
    });

    ScrollReveal().reveal('blockquote', {
      origin: 'right',      
      distance: '80px',      
   //   reset: true,           
      delay: 200             
    });

    
    const options = {
      strings: ['Full-Stack Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: false,
      showCursor: false
    };

    new Typed(this.multipleText.nativeElement, options);

  }


    
  }


  





