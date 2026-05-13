import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-tutorial');
  // name = 'Angular';
  // userName = 'Ketan';
  // userId = 12345;
  // isMarried = true;
  // isAlive = true;



  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //  items = ['html', 'css', 'javascript', 'angular'];

  // users = [
  //   { name: 'Ketan', age: 30 },
  //   { name: 'John', age: 25 },
  //   { name: 'Alice', age: 28 },
  //   { name: 'Bob', age: 35 }
  // ];

  // items = ['apple', 'banana', 'cherry', 'date'];

  // deleteItem(i: number) {
  //   this.items.splice(i, 1);
  // } 
}
