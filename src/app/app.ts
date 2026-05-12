import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = 'Angular';
  userName = 'Ketan';
  userId = 12345;
  isMarried = true;
  isAlive = true;
}
