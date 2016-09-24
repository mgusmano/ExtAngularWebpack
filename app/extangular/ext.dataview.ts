import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtDataViewMetaData {
	public static XTYPE: string = 'dataview';
	public static INPUTNAMES: string[] = [];
	public static OUTPUTS = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'selectionchange', parameters: 'control,record,eOpts' },
		{ name: 'itemmouseenter', parameters: 'control,index,target,record,e,eOpts' },
		{ name: 'itemmouseleave', parameters: 'control,index,target,record,e,eOpts' },
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtDataViewMetaData);

@Component({
	selector: 'ext-' + ExtDataViewMetaData.XTYPE,
	inputs: ExtDataViewMetaData.INPUTNAMES.concat('config'),
	outputs: ExtDataViewMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtDataView) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtDataView  extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtDataViewMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
