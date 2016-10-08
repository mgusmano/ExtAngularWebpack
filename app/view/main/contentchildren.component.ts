import { Component } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<ext [xtype]="'container'" [config]="containerConfig">
				<ext [xtype]="'button'" [config]="button1Config"></ext>
				<ext [xtype]="'button'" [config]="button2Config"></ext>
		</ext>
	`
})
export class ContentChildrenComponent { 
	button1Config = { text:'1', ui: 'action' };
	button2Config = { text:'2', ui: 'action' };
	private containerConfig:any = {};
	constructor() {
		this.containerConfig = {
			html: 'hi',
			layout: 'vbox'
		}
	}
}
