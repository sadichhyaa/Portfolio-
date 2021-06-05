import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgwWowModule } from 'ngx-wow';
import { ConnectComponent } from './connect/connect.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgwWowModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


