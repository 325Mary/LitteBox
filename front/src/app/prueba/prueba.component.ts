import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent   {

  formulario: FormGroup;


  constructor(private userService: UsersService) { 

    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  async onSubmit() {
    const response = await this.userService.login(this.formulario.value);
    console.log(response);
  }  

}
