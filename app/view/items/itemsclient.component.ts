import { Component } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<ext-container [layout]="'fit'" [config]="panelConfig">
			<ext-container [docked]="'left'" [config]="leftConfig">
				<ext-ngcomponent [selector]="'sidebar'"></ext-ngcomponent>
			</ext-container>
			<ext-toolbar [docked]="'top'" [config]="topConfig">
				<ext-button [text]="'hi'" [ui]="'action'" [width]="'100'"></ext-button>
				<ext [xtype]="'button'" [config]="button2Config"></ext>
				<ext-button [config]="button3Config"></ext-button>
			</ext-toolbar>
			<ext-container [docked]="'bottom'" [config]="bottomConfig"></ext-container>
			<ext-container [config]="centerConfig"></ext-container>
			<ext-container [docked]="'right'" [config]="rightConfig">
				<ext-ngcomponent [selector]="'tabs'" ></ext-ngcomponent>
			</ext-container>
		</ext-container>
	`
})
export class ItemsClientComponent {
	private panelConfig: any = { style: { background: 'lightyellow'}, top: 10, left:10, width: 600, height: 850 }
	private leftConfig: any = { xhtml: 'left', xwidth: 200, style: { background: 'lightgray'}}
	private topConfig: any = { height: 50, padding: 10	}
		private button1Config: any = { text: 'hello1', ui: 'action', margin: 2 }
		private button2Config: any = { text: 'hello2', ui: 'action', margin: 2 }
		private button3Config: any = { text: 'hello3', ui: 'action', margin: 2 }
	private bottomConfig: any = { html: 'bottom', height:40,  style: { background: 'lightgreen'}}
	private centerConfig: any = { html: 'center', flex: 1, style: { background: 'lightyellow'}}
	//private centerConfig: any = { component: 'outlet', item: 'a03', html: '<div id="a03"></div>'}
	private rightConfig: any = { xid: 'theRight', html: 'right', width: 200, style: { background: 'lightblue'}}

	//private welcomeConfig: any = { html: 'welcome', height: 50, style: { backgroundColor: 'lightblue'}}

	// onSelectionChange(event) {
	// 	alert(event.node.data.xtype);
	// }

	// private menuConfig: any = {
	// 	xtype: 'treelist',
	// 	flex: 1,
	// 	expanderFirst: false,
	// 	expanderOnly: false,
	// 	store: {
	// 		root: {
	// 			expanded: true,
	// 			children: [
	// 				{ iconCls: 'x-fa fa-cog', text: 'page01', xxclass: 'AppCamp.view.Page01View', xtype: 'page01view', leaf: true },
	// 				{ iconCls: 'x-fa fa-cog', text: 'page02', xxclass: 'AppCamp.view.Page02View', xtype: 'page02view', leaf: true },
	// 				{ iconCls: 'x-fa fa-cog', text: 'page03', xxclass: 'AppCamp.view.page03.Page03View', xtype: 'page03view', leaf: true },
	// 				{ iconCls: 'x-fa fa-cog', text: 'page04', xxclass: 'AppCamp.view.Page04View', xtype: 'page04view', leaf: true }
	// 			]
	// 		}
	// 	}
	// }
}
