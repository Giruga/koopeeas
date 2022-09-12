import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { ScoresComponent } from './components/scores/scores.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'play', component: PlayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
