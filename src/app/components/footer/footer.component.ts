import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  scrollToTop(): void {
    // Scroll fluido verso l'alto
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  
  
  
}
