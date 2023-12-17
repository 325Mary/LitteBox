import { Component } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  empresa: string = '';
  tenantId: string = '';
  email: string = '';
  password: string = '';
  imgfirme: File | null = null;
  registrationError = '';

  constructor(private usersService: UsersService) {}

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

    this.usersService.register(formValue).subscribe(
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
}
