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

// for click event
  handleClick() {
    console.log('Button clicked!');
  }
//for input event
  handleInput(event: any) {
    console.log('Input typed:', event.target.value);
  }
//for key up event and key down event
  handleKeyUp(event: any) {
    console.log('Key up event:', event.key);
  }

  //mouse hover event
  handleMouseHover() {
    console.log('Mouse hovered over the element!');
  }
 //mouse leave event
  handleMouseLeave() {
    console.log('Mouse left the element!');
  }

  //blur event
  handleBlur() {
    console.log('Input field lost focus!');
  }

  //focus event
  handleFocus() {
    console.log('Input field gained focus!');
  }
}
