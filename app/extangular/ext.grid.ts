import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

import { SimpleComponent } from '../view/items/simple.component';
import { FooterComponent } from '../view/main/footer.component';
import { TabsClientComponent } from '../view/tabs/tabsclient.component';
import { OutletComponent } from '../view/main/outlet.component';
import { SideBarComponent } from '../view/main/sidebar.component';
import { WelcomeComponent } from '../view/main/welcome.component';
import { MenuComponent } from '../view/main/menu.component';
import { ActionsComponent } from '../view/main/actions.component';

export interface ExtGridColumn {
	text?: string;
	width?: number;
	flex?: number;
	dataIndex?: string;
}

export interface ExtStore {
	xtype?: string;
	fields?: Array<Object>;
	data?: Array<Object>;
}

export class ExtGridMetaData {
	public static XTYPE: string = 'grid';
	public static INPUTNAMES: string[] = [
		'nofit',
		'title',
		'columns',
		'selModel',
		'plugins',
		'store'
	];
	public static OUTPUTS: any[] = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
		{ name: 'selectionchange', parameters: 'this,selected,eOpts' },
		{ name: 'beforecellclick', parameters: 'this,td,cellIndex,record,tr,rowIndex,e,eOpts' },
		{ name: 'enable', parameters: 'this,eOpts' },
		{ name: 'headerclick', parameters: 'ct,column,e,t,eOpts' }
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtGridMetaData);

@Component({
  selector: 'ext-' + ExtGridMetaData.XTYPE,
	inputs: ExtGridMetaData.INPUTNAMES.concat('config'),
	outputs: ExtGridMetaData.OUTPUTNAMES.concat('ready'),
	providers: [ { provide: ExtBase, useExisting: forwardRef(() => ExtGrid) } ],
	template: `<template #dynamicTarget></template>`
})
export class ExtGrid extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtGridMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
