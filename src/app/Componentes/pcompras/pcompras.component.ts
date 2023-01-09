import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from "./../../cargar-scripts.service"
declare function funcion ():void; 
@Component({
  selector: 'app-pcompras',
  templateUrl: './pcompras.component.html',
  styleUrls: ['./pcompras.component.css']
})
export class PcomprasComponent implements OnInit{
  constructor(private router:Router){ 
    funcion();
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
limpiar(){
  localStorage.clear();
  this.router.navigate([''])
}


}
