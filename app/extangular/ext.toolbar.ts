import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtToolbarMetaData {
	public static XTYPE: string = 'toolbar';
	public static INPUTNAMES: string[] = [
		'layout',
		'docked'
	];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtToolbarMetaData);

@Component({
	selector: 'ext-' + ExtToolbarMetaData.XTYPE,
	inputs: ExtToolbarMetaData.INPUTNAMES.concat('config'),
	outputs: ExtToolbarMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtToolbar) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtToolbar  extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtToolbarMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
