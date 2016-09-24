import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtCartesianMetaData {
	public static XTYPE: string = 'cartesian';
	public static INPUTNAMES: string[] = [
	];
	public static OUTPUTS: any[] = [
		{ name: 'select', parameters: 'control,record,eOpts' },
		{ name: 'columnsort', parameters: 'control,column,direction,eOpts' },
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtCartesianMetaData);

@Component({
  selector: 'ext-' + ExtCartesianMetaData.XTYPE,
	inputs: ExtCartesianMetaData.INPUTNAMES.concat('config'),
	outputs: ExtCartesianMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtCartesian) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtCartesian  extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef ) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtCartesianMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
