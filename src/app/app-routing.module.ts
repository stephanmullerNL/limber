import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
      path: '',
      component: HomePageComponent
  },
    {
        path: 'champion/:id',
        component: ChampionPageComponent
    },
    {
        path: 'matchup/:attacker/against/:defender',
        component: ComparePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
