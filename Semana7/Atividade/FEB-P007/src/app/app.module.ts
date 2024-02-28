import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ValorComponent } from './valor/valor.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    CarrinhoComponent,
    ValorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
