import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
	styles:[require('./welcome.component.css').toString()],
	selector: 'welcome',
	templateUrl: 'welcome.component.html',
})

export class WelcomeComponent {
	private firstName: any = 'Hillary'; private lastName:any = 'Clinton';
	private userImage: any;

	constructor(){
		this.userImage = 'resources/app/users/' + this.firstName + this.lastName +'.jpeg'
	}

}
