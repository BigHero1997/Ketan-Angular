import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h2 class="title">Welcome to My App</h2>`,
  styles: `
    .title {
      border-radius: 10px;
    padding: 20px;
    background-color: #ca9f9f;
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    color: #cb1111;
    margin-top: 20px;
    }
  `})

export class App {
  // protected readonly title = signal('angular-tutorial');
  // name = 'Angular';
  // userName = 'Ketan';
  // userId = 12345;
  // isMarried = true;
  // isAlive = true;
}
