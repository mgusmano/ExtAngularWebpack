import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtMetaData {
	public static XTYPE: string = '';
	public static INPUTNAMES: string[] = [
		'xtype',
		'fit'
	];
	public static OUTPUTS: any[] = [
		{ name: 'click', parameters: 'control,record,eOpts' }
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtMetaData);

@Component({
  selector: 'ext' + ExtMetaData.XTYPE,
	inputs: ExtMetaData.INPUTNAMES.concat('config'),
	outputs: ExtMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => Ext) }
	],
	template: `<template #dynamicTarget></template>`
})
export class Ext extends ExtBase implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtJSBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtJSBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
