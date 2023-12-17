import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../services/users.service";
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pre-registro',
  templateUrl: './pre-registro.component.html',
  styleUrls: ['./pre-registro.component.scss'] // Cambia styleUrl a styleUrls
})
export class PreRegistroComponent {
  formulario: FormGroup;

  opcionSeleccionada: any;

  username: string = '';
  empresa: string = '';
  tenantId: string = '';
  email: string = '';
  password: string = '';
  imgfirme: File | null = null;
  registrationError = '';

  constructor(private router: Router, private userService: UsersService) {
    //login
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })    
  }
  //registrarse

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.imgfirme = file;
  }
  onSubmit(): void {
    const formValue = {
      username: this.username,
      empresa: this.empresa,
      tenantId: this.tenantId,
      email: this.email,
      password: this.password,
      imgfirme: this.imgfirme
    };

    this.userService.register(formValue).subscribe(
      response => {
        console.log('Respuesta:', response);
        // Realizar acciones después de registrar
      },
      error => {
        console.error('Error en la solicitud HTTP:', error);
        this.registrationError = 'Error en el registro. Verifica los datos e inténtalo nuevamente.';
      }
    );
  }

  
  async onSubmitAsync() {
    const response = await this.userService.login(this.formulario.value);
    console.log(response);
  }

  aceptarSeleccion(event: any) {
    this.opcionSeleccionada = event.target.value;
    console.log('Opción seleccionada:', this.opcionSeleccionada);

    // Redirige a la ruta correspondiente sin usar ngModel
    if (this.opcionSeleccionada === 'opcion-1') {
      this.router.navigate(['/preRegistroEmpresa']);
    } else if (this.opcionSeleccionada === 'opcion-2') {
      this.router.navigate(['/registrarse']);
    }
  }

//cambio de
  
  
}