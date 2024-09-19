import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'portfolio';

  constructor(private router: Router) {}


  ngAfterViewInit(): void {
    setTimeout(() => {
      const sections = document.querySelectorAll('section'); 
      const navlinks = document.querySelectorAll('header nav a'); 
  
      window.onscroll = () => {
        let top = window.scrollY;
  
        if (top === 0 && this.router.url === '/') {
          navlinks.forEach(link => link.classList.remove('active')); 
          document.querySelector('header nav a[href="/"]')?.classList.add('active'); 
          return; 
        } 

        sections.forEach(sec => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height) {
            navlinks.forEach(link =>
              link.classList.remove('active')); 
            document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
          }
        });
      };
    }, 0);
  }
  
}
