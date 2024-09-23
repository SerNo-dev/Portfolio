import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ScrollReveal().reveal('.services-container', {
      origin: 'bottom',      
      distance: '80px',      
      // reset: true,           
      delay: 200             
    });
  }


}
