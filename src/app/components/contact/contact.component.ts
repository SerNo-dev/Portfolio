import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ScrollReveal().reveal('.contact form', {
      origin: 'bottom',      
      distance: '80px',      
    //  reset: true,           
      delay: 200             
    });
  }
}
