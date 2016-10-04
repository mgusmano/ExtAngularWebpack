import { Component } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<ext [xtype]="'container'" [config]="containerConfig">
				<ext [xtype]='button'></ext>
				<ext [xtype]='button'></ext>
		</ext>
	`
})
export class ContentChildrenComponent { 
	private containerConfig:any = {};
	constructor() {
		this.containerConfig = {
			html: 'hi',
			layout: 'vbox'
		}
	}
}
