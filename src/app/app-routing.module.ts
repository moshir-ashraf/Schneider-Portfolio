import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '../notFound/notFound.component';
import { InfoComponent } from '../modules/portfolio/info/info.component';
import { PerksComponent } from '../modules/portfolio/perks/perks.component';
import { HomeNavigatorsComponent } from './home-navigators/home-navigators.component';

const routes: Routes = [
  { path: '', component: HomeNavigatorsComponent, pathMatch: 'full' },
  {path: 'info', component: InfoComponent},
  {path: 'perks', component:PerksComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
