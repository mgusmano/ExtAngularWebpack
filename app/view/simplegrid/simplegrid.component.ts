import {Component} from '@angular/core';

@Component({
	selector: 'simplegrid',
	template: `
	<ext-grid
		[columns]="gridcolumns" 
		[store]="gridstore"
		[config]="gridconfig"
		(select)="onGridSelect($event)"
	></ext-grid>`
})
export class SimpleGridComponent {

	gridcolumns = [
		{ text: 'Name', width: 100, dataIndex: 'name' },
		{ text: 'Email Address', flex: 1, dataIndex: 'email' },
		{ text: 'Phone Number', width: 150, dataIndex: 'phone' }
	];

	gridstore = {
		fields: ['name', 'email', 'phone'],
		data: [
			{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
			{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
			{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
			{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
		]
	};

	gridconfig = { width: '600px', height: '200px' };

	private onGridSelect({record}) {
		alert(record.data.name);
	}
}
