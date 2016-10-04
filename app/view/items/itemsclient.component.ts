import { Component, Type } from '@angular/core';

import { SimpleComponent } from '../items/simple.component';
import { FooterComponent } from '../main/footer.component';
import { TabsClientComponent } from '../tabs/tabsclient.component';
import { OutletComponent } from '../main/outlet.component';
import { SideBarComponent } from '../main/sidebar.component';
import { WelcomeComponent } from '../main/welcome.component';
import { MenuComponent } from '../main/menu.component';
import { ActionsComponent } from '../main/actions.component';


@Component({
	styles:  [``],
  selector: '',
	template: `
		<ext-container [layout]="'fit'" [config]="panelConfig">
			<ext-container [docked]="'left'" [config]="leftConfig">
				<ext-ngcomponent [component]="sidebar"></ext-ngcomponent>
			</ext-container>
			<ext-toolbar [docked]="'top'" [config]="topConfig">
				<ext-button [text]="'hi'" [ui]="'action'" [width]="'100'"></ext-button>
				<ext [xtype]="'button'" [config]="button2Config"></ext>
				<ext-button [config]="button3Config"></ext-button>
			</ext-toolbar>
			<ext-container [docked]="'bottom'" [config]="bottomConfig"></ext-container>
			<ext-container [config]="centerConfig"></ext-container>
			<ext-container [docked]="'right'" [config]="rightConfig">
				<ext-ngcomponent [component]="tabs" ></ext-ngcomponent>
			</ext-container>
		</ext-container>
	`
})
export class ItemsClientComponent {
	tabs: Type<TabsClientComponent> = TabsClientComponent;
	sidebar: Type<SideBarComponent> = SideBarComponent;
	private panelConfig: any = { style: { background: 'lightyellow'}, top: 10, left:10, width: 1000, height: 900 }
	private leftConfig: any = { xhtml: 'left', xwidth: 200, style: { background: 'lightgray'}}
	private topConfig: any = { style: { background: 'lightgreen'}, height: 50, padding: 0	}
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
