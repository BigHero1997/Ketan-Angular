import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 // count = signal<number>(2);

  // doubleCount = computed<number>(() => this.count() * 2);

  // tripleCount = computed<number>(() => this.count() * 3);

  // increment() {
  //   this.count.set(this.count() + 1);
  // }

// firstName = signal<string>('John');
// lastName = signal<string>('Doe');

// fullName = computed<string>(() => `${this.firstName()} ${this.lastName()}`);

price = signal<number[]>([10, 20, 30,40,50]);

total = computed<number>(
  () => this.price().reduce((acc, curr) => acc + curr, 0)
);
}
