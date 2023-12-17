import { Component } from '@angular/core';
import { UsersService } from "../services/users.service";
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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