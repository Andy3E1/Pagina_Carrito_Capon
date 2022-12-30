import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { PloginComponent } from './Componentes/plogin/plogin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ComprasComponent,
    CarritoComponent,
    PloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
