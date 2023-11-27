import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pre-registro',
  templateUrl: './pre-registro.component.html',
  styleUrls: ['./pre-registro.component.scss'] // Cambia styleUrl a styleUrls
})
export class PreRegistroComponent {
  opcionSeleccionada: any;

  constructor(private router: Router) {}

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
}