import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-appM',
	styles:  [`
	`],
	template: `
		<ext-container [layout]="'fit'" [config]="mainConfig">


			<ext-container [docked]="'left'" [config]="leftConfig">
				<ext-ngcomponent [selector]="'sidebar'"></ext-ngcomponent>
			</ext-container>

<!--
			<ext-container [docked]="'left'" [config]="leftConfig">
				<ext-container [config]="welcomeConfig"></ext-container>
				<ext
					[xtype]="'treelist'" 
					[config]="menuConfig" 
					(selectionchange)="onSelectionChange($event)">
				</ext>
			</ext-container>
-->

			<ext-toolbar [docked]="'top'" [config]="topConfig">
				<ext-button [text]="'hi'" [ui]="'action'" [width]="'100'"></ext-button>
				<ext [xtype]="'button'" [config]="button2Config"></ext>
				<ext-button [config]="button3Config"></ext-button>
			</ext-toolbar>
			<ext-container [docked]="'bottom'" [config]="bottomConfig"></ext-container>
			<ext-ngcomponent [selector]="'outlet'" ></ext-ngcomponent>
			<ext-container [docked]="'right'" [config]="rightConfig">
				<ext-ngcomponent [selector]="'tabs'" ></ext-ngcomponent>
			</ext-container>
		</ext-container>
`
})

//	<extjs-router></extjs-router>

export class MainEComponent {

	constructor(private router: Router) {}

	onSelectionChange(event) {
		this.router.navigate(['/' + event.node.data.path])
	}

	private mainConfig: any = { style: { background: 'lightyellow'}, top: 0, left:0, width: '100%', height: '100%' }

	private simple01Config: any = { component: 'simple', item: 'a01simple', html: '<div id="a01simple"></div>' }
	private simple02Config: any = { component: 'tabs', item: 'a02tabs', html: '<div id="a02tabs"></div>' }



	private leftConfig: any = { width: 225, style: { background: 'lightgray'}}
	private topConfig: any = {  html: 'top', height: 50, padding: 10	}
	private bottomConfig: any = { html: 'bottom', height:40,  style: { background: 'lightgreen'}}
	//private centerConfig: any = { html: '<router-outlet></router-outlet>', flex: 1, style: { background: 'lightyellow'}}
	//private centerConfig: any = { component: 'outlet', item: 'a03', html: '<router-outlet></router-outlet><div id="a03"></div>'}
	private rightConfig: any = { html: 'right', width: 200, style: { background: 'lightblue'}}

	private welcomeConfig: any = { html: 'welcome', height: 50, style: { backgroundColor: 'lightblue'}}

	private menuConfig: any = {
		html: 'menu',
		xtype: 'treelist',
		flex: 1,
		expanderFirst: false,
		expanderOnly: false,
		store: {
			root: {
				expanded: true,
				children: [
					{ iconCls: 'x-fa fa-cog', text: 'dashboard', path: 'dashboard', leaf: true },
					{ iconCls: 'x-fa fa-cog', text: 'agencies', path: 'agencies', leaf: true },
					{ iconCls: 'x-fa fa-cog', text: 'chart', path: 'chart', leaf: true },
					{ iconCls: 'x-fa fa-cog', text: 'spendingdetail', path: 'spendingdetail', leaf: true },
					{ iconCls: 'x-fa fa-cog', text: 'candidate calendars', path: 'candidatecalendars', leaf: true },
				]
			}
		}
	}

	private button1Config: any = { html: 'hello1', text: 'hello1', ui: 'action', margin: 2 }
	private button2Config: any = { html: 'hello2', text: 'hello2', ui: 'action', margin: 2 }
	private button3Config: any = { html: 'hello3', text: 'hello3', ui: 'action', margin: 2 }

}
