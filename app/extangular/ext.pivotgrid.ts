import { Component, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtPivotGridMetaData {
	public static XTYPE: string = 'pivotgrid';
	public static INPUTNAMES: string[] = [
		'nofit',
		'leftAxis',
		'topAxis',
		'aggregate',
		'store',
		'title',
		'matrix'
	];
	public static OUTPUTS: any[] = [
		{ name: 'select', parameters: 'pivotgrid,record,eOpts' },
		{ name: 'pivotdone', parameters: 'matrix,eOpts' },
		{ name: 'pivotgroupcellclick', parameters: 'params,e,eOpts' },
		{ name: 'configchange', parameters: 'panel,config,eOpts' }
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtPivotGridMetaData);

@Component({
  selector: 'ext-' + ExtPivotGridMetaData.XTYPE,
	inputs: ExtPivotGridMetaData.INPUTNAMES.concat('config'),
	outputs: ExtPivotGridMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtPivotGrid) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtPivotGrid extends ExtBase {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtPivotGridMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
