import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { PerksComponent } from './perks/perks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoComponent, PerksComponent],
  exports: [InfoComponent, PerksComponent]
})
export class PortfolioModule { }
