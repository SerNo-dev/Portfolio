import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { Route,RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreejsCarouselComponent } from './components/threejs-carousel/threejs-carousel.component';

const routes : Route[] = [
  {
    path: '',
    component: HomeComponent,
  },{
    path:'about',
    component: AboutComponent
  },{
    path : 'skills',
    component :ServicesComponent
  },{
    path: 'portfolio',
    component: PortfolioComponent
  },{
    path:'contact',
    component:ContactComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent,
    ThreejsCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
