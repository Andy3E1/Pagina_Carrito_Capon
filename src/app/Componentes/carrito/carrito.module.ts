import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
declare function funcion():void; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CarritoModule {
  constructor(private router:Router){      
    
  }
  Nombre:any
  contraseña:any
  si_comprar='Comprado';
  select_comprar='Comprar';
  comprar=0;
ngOnInit():void{
  console.log("Ejecuta");
    this.recuperar_Formulario();
  funcion();
}
recuperar_Formulario(){
  this.Nombre= localStorage.getItem('Nombre')
  this.contraseña= localStorage.getItem('contraseña')}
nav(){
  this.router.navigate([''])
}
carro(){
  this.router.navigate(['web2'])
}
limpia(){
  this.router.navigate([''])
}
}
