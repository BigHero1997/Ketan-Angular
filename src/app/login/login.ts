import { Component } from '@angular/core';
import { About } from "../about/about";

@Component({
  selector: 'app-login',
  imports: [About],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginTitle = 'Login Page';
}
