import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionPageComponent,
    HomePageComponent,
    SearchComponent,
    ComparePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
