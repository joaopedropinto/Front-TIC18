import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AraraComponent } from './arara/arara.component';
import { LeaoComponent } from './leao/leao.component';
import { AcessoComponent } from './acesso/acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    AraraComponent,
    LeaoComponent,
    AcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
