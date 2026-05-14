import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//  count = signal(0);
//  name = signal('Angular');



//  setCount() {
//   this.count.set(2);
//  }

// count = signal(2);

// doubleCount = computed(() => this.count() * 2);

// constructor() {
//   effect(() => {
//     console.log('Count value is: ', this.count());
//     console.log('Double Count value is: ', this.doubleCount());
//   });
// }


// increaseCount() {
//   this.count.update(value => value + 1);

// }

count = signal(2);
price = signal(5);

total = computed(() => this.count() * this.price());

constructor() {  effect(() => {
    console.log('Count value is: ', this.count());
    console.log('Price value is: ', this.price());
    console.log('Total value is: ', this.total());
  });
}
increaseCount() {
  this.count.update(value => value + 1);    

}

incresePrice() {
  this.price.update(value => value + 1);
}

}