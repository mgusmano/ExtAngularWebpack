/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import {AfterContentInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
	ElementRef,EventEmitter,OnInit,QueryList,Type,ViewChild,ViewContainerRef
} from '@angular/core';

import { SimpleComponent } from '../view/items/simple.component';
import { FooterComponent } from '../view/main/footer.component';
import { TabsClientComponent } from '../view/tabs/tabsclient.component';
import { OutletComponent } from '../view/main/outlet.component';
import { SideBarComponent } from '../view/main/sidebar.component';
import { WelcomeComponent } from '../view/main/welcome.component';
import { MenuComponent } from '../view/main/menu.component';
import { ActionsComponent } from '../view/main/actions.component';

@Component({
	selector: 'extjs',
	inputs: [ 'xtype', 'docked', 'flex', 'fit', 'layout', 'config', 'parent', 'ng2component' ],
	outputs: [ 'ready', 'select', 'selectionchange', 'tapit' ],
	template: `<template #dynamicTarget></template>`
})
export class ExtJS implements AfterContentInit, OnInit {
	@ContentChildren(ExtJS, { read: ViewContainerRef }) ExtJSComponentsRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;

	// static iterateIt(ExtJSEvents: any) {
	// 	for (var key in ExtJSEvents.EVENTS) {
	// 		var value = ExtJSEvents.EVENTS[key].name;
	// 		ExtJSEvents.EVENTNAMES.push(value);
	// 	}
	// }

	public myElement: any;
	public componentFactoryResolver: ComponentFactoryResolver;
	public viewContainerRef: ViewContainerRef;
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef)
	{
		this.myElement = myElement;
		this.componentFactoryResolver = componentFactoryResolver;
		this.viewContainerRef = viewContainerRef;
		this['ready'] = new EventEmitter();
		this['select'] = new EventEmitter();
		this['selectionchange'] = new EventEmitter();
		this['tapit'] = new EventEmitter();
	}

	ngAfterContentInit() {
		debugger;
		var extJSRootComponentRef : ViewContainerRef = this.ExtJSComponentsRef.first;
		var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;
		firstExtJS.setRenderTo(this.myElement.nativeElement);
		var ExtJSComponentRefArray: any = this.ExtJSComponentsRef.toArray();
		var arrayLength = ExtJSComponentRefArray.length;
		for (var i = 1; i < arrayLength; i++) {
			var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
			firstExtJS.add(obj);
		}
	}

	public ngOnInit() {
		let me: any  = this;
		let o: any = {
			layout: me.layout,
			docked: me.docked,
		};
		if (me.ng2component != undefined) {
			o.xtype = 'container';
		}
		else {
			o.xtype = me.xtype;
		}
		if (true == me.fit) {
			o.top=0, 
			o.left=0, 
			o.width='100%', 
			o.height='100%'
		}
		if (me.config !== {} ) {
			Ext.apply(o, me.config);
		};
		o.listeners = {};
		o.listeners['select'] = function(list, record, eOpts) { me.select.next({list: list, record: record, eOpts: eOpts}); };
		o.listeners['selectionchange'] = function(list, node) { me.selectionchange.next({list: list, node: node}); };
		o.listeners['tap'] = function(obj, e, eOpts) { me.tapit.next({obj: obj, e: e}); };
		me.extjsObject = Ext.create(o);

		if (me.ng2component != undefined) {
			var componentFactory: ComponentFactory<any>;
			var type: Type<any>;
			switch(me.ng2component) {
				case '<sidebar></sidebar>': type = SideBarComponent; break;
				case '<tabs></tabs>': type = TabsClientComponent; break;
			};
			componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
			me.componentRef = me.dynamicTarget.createComponent(componentFactory);
			me.componentRef.instance['buttontext'] = 'testing';
			var node = me.extjsObject.innerElement.dom;
			node.appendChild(me.componentRef['_hostElement'].nativeElement);
		}
		if (me.parent != undefined) {
			me.parent.insert(0, me.extjsObject);
		}
		me.ready.next(me);
	}
}
