import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private router:Router) { 
    
   
  }
  Nombre:any
  contraseña:any
  si_comprar='Comprado';
  select_comprar='Comprar';
  comprar=0;
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
  this.contraseña= localStorage.getItem('contraseña')

}
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
//ECOMMERCE PAGINA
