import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { PerksComponent } from './perks/perks.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [InfoComponent, PerksComponent],
  exports: [InfoComponent, PerksComponent]
})
export class PortfolioModule { }
