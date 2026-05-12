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





counter: number = 0;


// handleAdd() {
//   this.counter++;

// }

// handleSubtract() {
//   if(this.counter > 0) {
//     this.counter--;
//   }
// }

// handleReset() {
//   this.counter = 0;   
// }


handle(value: string) {
  if(value === 'plus') {
    this.counter++;
  }
  else if(value === 'minus') {
    if(this.counter > 0) {
      this.counter--;
    }
  }
  else{
    this.counter = 0;
  }

}

}
