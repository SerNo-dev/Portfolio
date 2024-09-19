import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  AfterViewInit{

  @ViewChild('header') header!: ElementRef;

  
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private renderer: Renderer2) {}
  
  @Output() elementsToParent = new EventEmitter<{ menuIcon: ElementRef, navbar: ElementRef }>();
 
  

  ngAfterViewInit(): void {
    this.toggleStickyHeader();
    this.elementsToParent.emit({ menuIcon: this.menuIcon, navbar: this.navbar });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleStickyHeader();
  }

  toggleStickyHeader() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const shouldBeSticky = scrollY > 100;
    this.header.nativeElement.classList.toggle('sticky', shouldBeSticky);
  }

  
  onMenuIconClick():void {
    this.menuIcon.nativeElement.classList.toggle('bx-x');
    this.navbar.nativeElement.classList.toggle('active');
 }

 onNavLinkClick(event: Event): void {
  this.renderer.removeClass(this.menuIcon.nativeElement, 'bx-x');
  this.renderer.removeClass(this.navbar.nativeElement, 'active');
}

}
