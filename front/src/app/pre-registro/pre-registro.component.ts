import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pre-registro',
  templateUrl: './pre-registro.component.html',
  styleUrls: ['./pre-registro.component.scss']
})
export class PreRegistroComponent implements OnInit {

  pestanaActual: string = 'valorInicial'; 
  user = {
    email: '',
    password: ''
  };

  constructor(private userService: UsersService) { 

    
  }
 

  ngOnInit(): void {
    
    const pestanaGuardada = localStorage.getItem('pestanaActual');
    if (pestanaGuardada) {
      this.pestanaActual = pestanaGuardada;
    }
  }

  onSubmit() {
    console.log('Datos del formulario:', this.user);
    // Aquí va la lógica para manejar la presentación del formulario
  }

  cambiarPestana(pestana: string): void {
    this.pestanaActual = pestana;
    localStorage.setItem('pestanaActual', pestana);
  }
  
}