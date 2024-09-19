import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  AfterViewInit{


  @ViewChild('header') header!: ElementRef;


  ngAfterViewInit(): void {
    this.toggleStickyHeader();
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
}
