import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtListMetaData {
	public static XTYPE: string = 'list';
	public static INPUTS: string[] = [];
	public static OUTPUTS: any[] = [
		{ name: 'select', parameters: 'control,record,eOpts' },
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtListMetaData);

@Component({
  selector: 'ext-' + ExtListMetaData.XTYPE,
	inputs: [ 'config'],
	outputs: ExtListMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtList) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtList  extends ExtBase{
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtListMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
