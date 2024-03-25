import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { BanaanComponent } from './app/banaan/banaan.component';
import { KiwiComponent } from './app/kiwi/kiwi.component';

@Component({
	selector: 'user',
	standalone: true,
	styles: `
		h2 {
			color : white;
		}
		body {
			color : white;
		}
	`,
	templateUrl: './user.html',
})
export class User {
	name = '';
	isLoggedin = false;
	channelsJoined = [{id: 1, name: "first!"}, {id: 2, name: "our fun channel"}, {id: 9, name: "number nine"}, {id: 2, name: "id's don't need to be unique lol"}];
	logInNow() {
		this.isLoggedin = true;
	};
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BanaanComponent, KiwiComponent, User],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
