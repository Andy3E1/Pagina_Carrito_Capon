import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})
export class PloginComponent implements OnInit {

  constructor(private router:Router) { 
  }
Nombre:any;
contrasena: any;
nom_comprobar='Andy';
num_comprobar='123';
    ngOnInit(): void {
      this.informacion();
}
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}
//******FORMULARIO********* */
informacion(){
  localStorage.setItem('Nombre', this.Nombre.toString());
  localStorage.setItem('contraseña', this.contrasena.toString());
}
comprobar(){
  if (this.Nombre===this.nom_comprobar && this.contrasena==this.num_comprobar) {
    this.nav();
  }else{
this.err404();
  }
}
nav(){
  this.router.navigate(['web1'])
}
err404(){
  this.router.navigate(['web3'])
}
}
