import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { PipeCurrencyConvertPipe } from './pipe/pipe-currency-convert-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PipeShortNamePipe, PipeCurrencyConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
lname =  "ketan";
uName = "KETAN";

today = new Date();

amount = 1000;

per = 0.25;

user = [{ name: "John", age: 30 },
{ name: "Jane", age: 25 },
{ name: "Doe", age: 35 }
];



fullName = "Ketan Kulawade";

usd = 1;
usdToINR = 95;

}
