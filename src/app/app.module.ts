import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '../notFound/notFound.component';
import { PortfolioModule } from '../modules/portfolio/portfolio.module';
import { HomeNavigatorsComponent } from './home-navigators/home-navigators.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeNavigatorsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundComponent,
    PortfolioModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent],
})
export class AppModule {}
