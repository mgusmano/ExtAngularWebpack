import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtPolarMetaData {
	public static XTYPE: string = 'polar';
	public static INPUTNAMES: string[] = [];
	public static OUTPUTS: any[] = [
		{ name: 'select', parameters: 'control,record,eOpts' },
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtPolarMetaData);

@Component({
  selector: 'ext-' + ExtPolarMetaData.XTYPE,
	inputs: ExtPolarMetaData.INPUTNAMES.concat('config'),
	outputs: ExtPolarMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtPolar) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtPolar  extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtPolarMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
