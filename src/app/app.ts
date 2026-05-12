import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   protected readonly title = signal('angular-tutorial');
//   name = 'Angular';
//   userName = 'Ketan';
//   userId = 12345;
//   isMarried = true;
//   isAlive = true;
// 

name: string = "";
city: string = "";
email: string = "";


updateName(value: string) {
  this.name = value;
}

getEmail(email: string) {
  this.email = email;
}

}
