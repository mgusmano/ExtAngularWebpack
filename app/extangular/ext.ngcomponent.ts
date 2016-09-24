import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtNgComponentMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = [
		'selector',
		'selectorParams'
	];
	public static OUTPUTS: any[] = [
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtNgComponentMetaData);

@Component({
  selector: 'ext-ngcomponent',
	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{ provide: ExtBase, useExisting: forwardRef(() => ExtNgComponent) }],
	template: `<template #dynamicTarget></template>`
})
export class ExtNgComponent  extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
	}
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
