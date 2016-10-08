import {Component} from '@angular/core';

@Component({
	selector: 'simplegrid',
	template: `
	<ext-grid
		[columns]="gridcolumns" 
		[store]="gridstore"
		[config]="gridconfig"
		(select)="onGridSelect($event)"
		(activate)="onGridActivate($event)"
		(hideq)="onGridHide($event)"
	></ext-grid>

<ext-formpanel title='hi' width='90%'>
	<ext-emailfield
		label='Email'
		name='email'
		(change)='onEmailChange($event)'
	>
	</ext-emailfield>
	<ext-button text='hi' ui='action' (tapit)='onTap($event)'></ext-button>
</ext-formpanel>
	`
})
export class SimpleGridComponent {

	private onTap() { console.log('tap'); }
	private onEmailChange({newValue}) { console.log(newValue); }

	// gridListeners = {
	// 	select: this.doSelect()
	// }
	// private doSelect() { alert('doselect'); }


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

	private onGridActivate(event) { console.log(event); }
	private onGridHide(event) { console.log(event); }
}
