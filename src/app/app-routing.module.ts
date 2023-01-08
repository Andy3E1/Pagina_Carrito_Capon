import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { PcomprasComponent } from './Componentes/pcompras/pcompras.component';
import { PloginComponent } from './Componentes/plogin/plogin.component';

const routes: Routes = [
  {path:'', component: PloginComponent },
  {path:'web1', component: PcomprasComponent},
  {path:'volver', component: PloginComponent },
  {path:'web2', component: CarritoComponent},
  {path:'web3', component: ErrorComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
