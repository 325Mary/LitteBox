import { Component, Inject } from '@angular/core'; // Correct import
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formulario: FormGroup;

  constructor(private userService: UsersService) { // Inject UsersService through the constructor
    this.formulario = new FormGroup({
      username: new FormControl(),
      empresa: new FormControl(),
      nit: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.userService.register(this.formulario.value);
    console.log(response);
  }
}
