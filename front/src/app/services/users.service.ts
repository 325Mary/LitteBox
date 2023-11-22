import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000";
  }

  register(formValue: any) {
    const url = `${this.baseUrl}/registrar`;
    return firstValueFrom(
      this.httpClient.post<any>(url, formValue)

    ).catch((error) => {
      console.error('Error en la solicitud HTTP:', error);
      throw error; // Propaga el error para que el componente que llama también pueda manejarlo
    });
  }

  login(formValue: any) {
    const url = `${this.baseUrl}/iniciarSesion`;
    return firstValueFrom(
      this.httpClient.post<any>(url, formValue)
    )
}
}