import { Component } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<extjs [xtype]="'container'" [layout]="'vbox'" [config]="containerConfig">
				<extjs [xtype]='button'></extjs>
				<extjs [xtype]='button'></extjs>
		</extjs>
	`
})
export class ContentChildrenComponent { 
	private containerConfig:any = {};
	constructor() {
		this.containerConfig = {
			html: 'hi'
		}
	}
}
