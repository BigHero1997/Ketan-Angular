import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = 'Angular';
  userName = 'Ketan';
  userId = 12345;
  isMarried = true;
  isAlive = false;
  work = "Engineer";

  titleData = signal('angular-tutorial-worked');


  getUser() {
    return "Ketan";
  }
}
