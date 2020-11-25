import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: '**', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
