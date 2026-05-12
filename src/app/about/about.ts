import { Component } from '@angular/core';
import { FootAbout } from "../foot-about/foot-about";

@Component({
  selector: 'app-about',
  imports: [FootAbout],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutTitle = 'About Page';
}
