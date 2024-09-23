import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ScrollReveal().reveal('.about-img', {
      origin: 'left',      
      distance: '80px',      
    //  reset: true,           
      delay: 200             
    });


    ScrollReveal().reveal('.about-content', {
      origin: 'rigth',      
      distance: '80px',      
     // reset: true,           
      delay: 200             
    });
  }




}
