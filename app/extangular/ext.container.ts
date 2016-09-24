import { Component, ViewChild, OnInit, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtContainerMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = [
		'layout',
		'docked'
	];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtContainerMetaData);

@Component({
	selector: 'ext-' + ExtContainerMetaData.XTYPE,
	inputs: ExtContainerMetaData.INPUTNAMES.concat('config'),
	outputs: ExtContainerMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtContainer) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtContainer  extends ExtBase implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtContainerMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
