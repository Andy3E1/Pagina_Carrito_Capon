import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { PloginComponent } from './Componentes/plogin/plogin.component';
import { FormsModule } from '@angular/forms';
import { PcomprasComponent } from './Componentes/pcompras/pcompras.component';
//INICIO
import { CargarScriptsService } from './cargar-scripts.service';
//FIN

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ComprasComponent,
    CarritoComponent,
    PloginComponent,
    PcomprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CargarScriptsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
