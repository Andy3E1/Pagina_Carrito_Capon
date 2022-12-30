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
Apellido: any;
correo:any;
contrasena: any;
confirmarcontra:any;
telefono: any;
    ngOnInit(): void {
      this.informacion();
      localStorage.clear();
}
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}
//******FORMULARIO********* */
informacion(){
  localStorage.setItem('Nombre', this.Nombre);
  localStorage.setItem('Apellido', this.Apellido);
  localStorage.setItem('correo', this.correo);
  localStorage.setItem('contraseña', this.contrasena);
  localStorage.setItem('confir', this.confirmarcontra);
  localStorage.setItem('telefono', this.telefono);
}
nav(){
  this.router.navigate(['web1'])
}
}
