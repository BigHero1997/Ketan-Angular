import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface PhoneData {
  brand: string;
  model: string;
  price: number;
}

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

  count= signal<number>(0); //signal created
  name= signal<string>('Angular'); //signal created
  isAdmin= signal<boolean>(true); //signal created

  numbers = signal<number[]>([10, 20, 30, 40, 50]); //signal created
  user = signal<{name: string, age: number}>({name: 'Ketan', age: 30});
  phoneData = signal<PhoneData>({brand: 'Apple', model: 'iPhone 12', price: 999});



//   value=20;

// // count.update(c=> c+1); //update signal value

// increment (){
//   this.count.update(c=> c+1);
// }

// decrement (){
//   this.count.update(c=> c-1);

// }

// reset(){
//   this.count.set(0);
// }

directUpdate(){
  this.numbers.set([100, 200, 300, 400, 500]);
}

addNumber(){
  this.numbers.update(arr=> [...arr, 600]);
}




}
