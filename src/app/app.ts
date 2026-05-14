import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  // userName = 'Ketan';

//name = signal('Kajal');


  user = signal<{ name: string; age: number }>({ name: 'Ketan', age: 30 });



  updateName(value: string) {
    this.user.update(user => ({ ...user, name: value }));

  }

  updateAge(value : number) {
    this.user.update(user => ({ ...user, age: value }));
  } 


}