import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-tutorial');
  // name = 'Angular';
  // userName = 'Ketan';
  // userId = 12345;
  // isMarried = true;
  isAlive = false;
  marks = 45;
  showBox = true;
  age = 0;
  section = "home";
  updateAge(value: string) {
    this.age = Number(value);

  }

  toggleBox() {
    //if false then true and if true then false
    this.showBox = !this.showBox;
  }
}
