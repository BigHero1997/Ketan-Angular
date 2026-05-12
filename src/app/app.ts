import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;
  

handleClick() {
  let carName = "BMW"
  console.log("button clicked" + carName);

  this.handleFunction();
  
}

handleFunction() {

  console.log("Function is called", this.count);
}
}