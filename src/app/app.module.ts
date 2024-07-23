import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '../notFound/notFound.component';
import { PortfolioModule } from '../modules/portfolio/portfolio.module';
import { HomeNavigatorsComponent } from './home-navigators/home-navigators.component';


@NgModule({
  declarations: [	
    AppComponent,
      HomeNavigatorsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundComponent,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
