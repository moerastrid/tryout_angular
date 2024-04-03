import { Component, Output, EventEmitter } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { BanaanComponent } from './app/banaan/banaan.component';
import { GameComponent } from './app/game/game.component';
import { KiwiComponent } from './app/kiwi/kiwi.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { GameModule } from './app/game/game.module';


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
	imports: [ReactiveFormsModule, TitleCasePipe],
})
export class User {
	// name = '';
	isLoggedin = false;
	channelsJoined = [{id: 1, name: "first!"}, {id: 2, name: "our fun channel"}, {id: 9, name: "number nine"}, {id: 2, name: "id's don't need to be unique lol"}];
	logInNow() {
		this.isLoggedin = true;
	};
	profileForm = new FormGroup({
    	name : new FormControl('', Validators.required),
    	hobby: new FormControl(''),
 	});

	@Output() submitEvent = new EventEmitter<string>();

	handleSubmit() {
		if (this.profileForm.value.name != null)
			this.submitEvent.emit(this.profileForm.value.name);
	};
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BanaanComponent, GameComponent, KiwiComponent, User, NgOptimizedImage],
  templateUrl: './main.html',
})
export class App {
	name = 'Angular';

	updateName(name: string) {
    	this.name = name;
	};
}

bootstrapApplication(App);
