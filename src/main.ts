import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { BanaanComponent } from './app/banaan/banaan.component';
import { KiwiComponent } from './app/kiwi/kiwi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BanaanComponent, KiwiComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
	<body>
	<app-banaan></app-banaan>
	<app-kiwi></app-kiwi>
	<app-banaan></app-banaan>
	</body>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
