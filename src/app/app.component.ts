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
      const sections = document.querySelectorAll('section'); // Seleziona tutte le sezioni
      const navlinks = document.querySelectorAll('header nav a'); // Seleziona tutti i link
  
      window.onscroll = () => {
        let top = window.scrollY;
  
        // Se non stai navigando su un'altra rotta e sei in cima alla pagina
        if (top === 0 && this.router.url === '/') {
          navlinks.forEach(link => link.classList.remove('active')); // Rimuovi tutte le classi 'active'
          document.querySelector('header nav a[href="/"]')?.classList.add('active'); // Aggiungi 'active' a Home
          return; // Esci dalla funzione per evitare di attivare altri link
        } 

   
  
        // Gestisci l'attivazione dinamica delle sezioni quando scorri
        sections.forEach(sec => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active')); // Rimuovi la classe 'active'
  
            // Aggiungi la classe 'active' solo al link della sezione visibile
            document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
          }
        });
      };
    }, 0);
  }
  
  
}
