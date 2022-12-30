import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private router:Router) { }
  Nombre:any
  Apellido: any;
  correo:any
  contraseña:any
  confirmarcontra:any
  telefono:any
  ngOnInit(): void {
    this.recuperar_Formulario();

  }
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

//********************************** */
recuperar_Formulario(){
  this.Nombre= localStorage.getItem('Nombre')
  this.Apellido= localStorage.getItem('Apellido')
  this.correo= localStorage.getItem('correo')
  this.contraseña= localStorage.getItem('contraseña')
  this.confirmarcontra= localStorage.getItem('confir' )
  this.telefono= localStorage.getItem('telefono')

}
nav(){
  this.router.navigate([''])
}
}