import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.portfolio-box', {
      origin: 'bottom',      
      distance: '80px',      
     // reset: true,           
      delay: 200             
    });
  }

}
