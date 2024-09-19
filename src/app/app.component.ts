import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'portfolio';

  menuIcon!: ElementRef;
  navbar!: ElementRef;
 
  handleElements(elements : { menuIcon :ElementRef,navbar:ElementRef}) {
    this.menuIcon = elements.menuIcon;
    this.navbar = elements.navbar;
  }


  constructor(private router: Router, private renderer: Renderer2) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.highlightActiveSection();
  }

  ngAfterViewInit(): void {
    this.highlightActiveSection();
  }

  highlightActiveSection(): void {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');

    let top = window.scrollY;

    if (top === 0 && this.router.url === '/') {
      navlinks.forEach(link => {
        this.renderer.removeClass(link, 'active');
      });
      const homeLink = document.querySelector('header nav a[href="/"]');
      if (homeLink) {
        this.renderer.addClass(homeLink, 'active');
      }
      return;
    }

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => {
          this.renderer.removeClass(link, 'active');
        });
        const activeLink = document.querySelector(`header nav a[href*='${id}']`);
        if (activeLink) {
          this.renderer.addClass(activeLink, 'active');
        }
      }
    });

    this.renderer.removeClass(this.menuIcon.nativeElement, 'bx-x');
    this.renderer.removeClass(this.navbar.nativeElement, 'active');
  }

  
}