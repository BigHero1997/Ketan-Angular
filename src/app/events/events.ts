import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = 0;

  increment () {

    this.count++;
  }

  showEvent (e: any) {
    console.log(e);
  }

  userName = '';
  updateName (value: any) {
    this.userName = value;

  }

  signalCount = signal(0);
  incrementSignal () {
    this.signalCount.update(count => count + 1);
  }

  handleSubmit (e: any) {
    e.preventDefault();
    console.log('Form submitted');

  }
}
