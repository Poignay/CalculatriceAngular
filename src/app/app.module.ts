import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToucheComponent } from './touche/touche.component';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    ToucheComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
