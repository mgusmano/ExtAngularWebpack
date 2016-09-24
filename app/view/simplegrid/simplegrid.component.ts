import {Component} from '@angular/core';
import {ExtGridColumn, ExtStore} from '../../extangular/ext.grid';

@Component({
	selector: 'simplegrid',
	template: `
	<ext-grid
			[columns]= "gridcolumns" 
			[store]="gridstore"
			[config]="gridconfig"
			(select)="onGridSelect($event)"
		></ext-grid>
		`
})
export class SimpleGridComponent {
	gridcolumns: Array<ExtGridColumn> = [
		{ text: 'Name', width: 100, dataIndex: 'name' },
		{ text: 'Email Address', flex: 1, dataIndex: 'email' },
		{ text: 'Phone Number', width: 150, dataIndex: 'phone' }
	];
	gridstore: ExtStore = {
		fields: [ 'name', 'email', 'phone' ],
		data: [
			{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
			{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
			{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
			{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
		]
	};
	gridconfig:Object = { layout: 'fit', margin: '20px', width: '600px', height: '200px' };

	private onGridSelect(event) {
		console.log(event.record.data.name);
	}
}
