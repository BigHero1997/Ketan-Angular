import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // count = signal(0);

  // constructor() {
  //   effect(() => {
  //     console.log("Count is ", this.count());
  //   });

  // }


  // increment () {
  //   this.count.update(count => count + 1);
  // }
 

  isDarkMode = signal(false);

  // constructor() {
  //   effect(() => {
  //     if (this.isDarkMode()) {
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
        
  //     } else {
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   });
  // }

  // toggleDarkMode() {
  //   this.isDarkMode.update(isDark => !isDark);
  // }


message = signal("");

  constructor() {
    effect(() => {
      if (this.message()) {
        setTimeout(() => {
          this.message.set("");
        }, 5000);
      } 
  });
}
  

showMessage() {
  this.message.set("Hello World");

}

}