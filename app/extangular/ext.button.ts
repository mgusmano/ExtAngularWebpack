import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ExtBase } from './ext.base';

export class ExtButtonMetaData {
	public static XTYPE: string = 'button';
	public static INPUTNAMES: string[] = [
		'nofit',
		'text',
		'ui',
		'width',
		'height'
	];
	public static OUTPUTS: any[] = [
		{ name: 'click', parameters: 'control,record,eOpts' }
	];
	public static OUTPUTNAMES: string[] = [];
}
ExtBase.iterateIt(ExtButtonMetaData);

@Component({
  selector: 'ext-' + ExtButtonMetaData.XTYPE,
	inputs: ExtButtonMetaData.INPUTNAMES.concat('config'),
	outputs: ExtButtonMetaData.OUTPUTNAMES.concat('ready'),
	providers: [
		{ provide: ExtBase, useExisting: forwardRef(() => ExtButton) }
	],
	template: `<template #dynamicTarget></template>`
})
export class ExtButton extends ExtBase implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtButtonMetaData);
	}
	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtJSBaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.ExtJSBaseRef); }
	ngOnInit() { this.OnInit(this.dynamicTarget); }
}
