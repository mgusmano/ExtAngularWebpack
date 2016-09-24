/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import {AfterContentInit,AfterViewInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
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

export class ExtBase{
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;
	private nofit: any;

	static iterateIt(MetaData: any) {
		for (var key in MetaData.OUTPUTS) {
			var name = MetaData.OUTPUTS[key].name;
			MetaData.OUTPUTNAMES.push(name);
		}
	}

	public myElement: any;
	public componentFactoryResolver: ComponentFactoryResolver;
	public viewContainerRef: ViewContainerRef;
	public metaData;

	//constructor(myElement: ElementRef, @Attribute('fit') fit: any) {
	constructor(myElement: any, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, metaData: any) {
		this.myElement = myElement;
		this.componentFactoryResolver = componentFactoryResolver;
		this.viewContainerRef = viewContainerRef;
		this.metaData = metaData;

		//this.nofit = nofit;
		this.xtype = metaData.XTYPE;
		this.inputs = metaData.INPUTNAMES;
		this.rootElement = myElement.nativeElement;
		let me = this;
		this['ready'] = new EventEmitter();
		metaData.OUTPUTS.forEach( (event: any, n: any) => {
			(<any>this)[event.name] = new EventEmitter();
			this.listeners[event.name] = function() {
					let parameters = event.parameters;
					let parms = parameters.split(',');
					let args = Array.prototype.slice.call(arguments);
					let o: any = {};
					for (let i = 0, j = parms.length; i < j; i++ ) {
						//if (parms[i] !== 'eOpts') {
							o[parms[i]] = args[i];
						//}
					}
					me[event.name].next(o);
			};
		});
	}

	// aci(ExtJSBaseRef) {
	// 	debugger;
	// 	var extJSRootComponentRef : ViewContainerRef = ExtJSBaseRef.first;

	// }
	// ngAfterContentInit() {
	AfterContentInit(ExtJSBaseRef) {
		var extJSRootComponentRef : ViewContainerRef = ExtJSBaseRef.first;
		var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;
		firstExtJS.setRenderTo(this.myElement.nativeElement);
		var ExtJSComponentRefArray: any = ExtJSBaseRef.toArray();
		var arrayLength = ExtJSComponentRefArray.length;
		for (var i = 1; i < arrayLength; i++) {
			var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
			firstExtJS.add(obj);
		}
	}

	OnInit(dynamicTarget) {
		let me: any = this;
		let o: any = {};

		o.listeners = {};
		//do this in a loop
		o.listeners['select'] = function(list, record, eOpts) { me.select.next({list: list, record: record, eOpts: eOpts}); };
		o.listeners['selectionchange'] = function(list, node) { me.selectionchange.next({list: list, node: node}); };
		o.listeners['tap'] = function(obj, e, eOpts) { me.tapit.next({obj: obj, e: e}); };

		o.xtype = me.xtype;
		if (me.xtype != '') { o.xtype = me.xtype; }
		for (var i = 0; i < me.metaData.INPUTNAMES.length; i++) { 
			var prop = me.metaData.INPUTNAMES[i];
			if (me[prop] != undefined ) { o[prop] = me[prop]; };
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
		me.extjsObject = Ext.create(o);
		if (me.selector != undefined) {
			var componentFactory: ComponentFactory<any>;
			var type: Type<any>;
			switch(me.selector) {
				case 'sidebar': type = SideBarComponent; break;
				case 'tabs': type = TabsClientComponent; break;
				case 'outlet': type = OutletComponent; break;
			};
			componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
			me.componentRef = dynamicTarget.createComponent(componentFactory);
			//me.componentRef.instance['buttontext'] = 'testing';
			var node = me.extjsObject.innerElement.dom;
			node.appendChild(me.componentRef['_hostElement'].nativeElement);
		}
		if (me.parent != undefined) {
			me.parent.insert(0, me.extjsObject);
		}
		me.ready.next(me);
	}






	// public ngOnInit() {
	// 	//debugger;
	// 	let me: any  = this;
	// 	let o: any = {
	// 		layout: me.layout,
	// 		docked: me.docked,
	// 	};
	// 	if (me.ng2component != undefined) {
	// 		o.xtype = 'container';
	// 	}
	// 	else {
	// 		o.xtype = me.xtype;
	// 	}
	// 	if (true == me.fit) {
	// 		o.top=0, 
	// 		o.left=0, 
	// 		o.width='100%', 
	// 		o.height='100%'
	// 	}
	// 	if (me.config !== {} ) {
	// 		Ext.apply(o, me.config);
	// 	};
	// 	o.listeners = {};
	// 	o.listeners['select'] = function(list, record, eOpts) { me.select.next({list: list, record: record, eOpts: eOpts}); };
	// 	o.listeners['selectionchange'] = function(list, node) { me.selectionchange.next({list: list, node: node}); };
	// 	o.listeners['tap'] = function(obj, e, eOpts) { me.tapit.next({obj: obj, e: e}); };
	// 	me.extjsObject = Ext.create(o);

	// 	if (me.ng2component != undefined) {
	// 		var componentFactory: ComponentFactory<any>;
	// 		var type: Type<any>;
	// 		switch(me.ng2component) {
	// 			case '<sidebar></sidebar>': type = SideBarComponent; break;
	// 			case '<tabs></tabs>': type = TabsClientComponent; break;
	// 		};
	// 		componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
	// 		me.componentRef = me.dynamicTarget.createComponent(componentFactory);
	// 		me.componentRef.instance['buttontext'] = 'testing';
	// 		var node = me.extjsObject.innerElement.dom;
	// 		node.appendChild(me.componentRef['_hostElement'].nativeElement);
	// 	}
	// 	if (me.parent != undefined) {
	// 		me.parent.insert(0, me.extjsObject);
	// 	}
	// 	me.ready.next(me);
	// }

	// public ngOnInit() {
	// 	let me: any  = this;
	// 	if (me.rootElement.childElementCount === 0 ) {
	// 		let o: any = {
	// 			xtype: me.xtype,
	// 			//top: 0, left:0, width: '100%', height: '100%',
	// 			renderTo: me.rootElement
	// 		};
	// 		if (true != me.nofit) {
	// 			o.top=0, 
	// 			o.left=0, 
	// 			o.width='100%', 
	// 			o.height='100%'
	// 		}
	// 		o.listeners = me.listeners;
	// 		if (me.inputs != undefined) {
	// 			for (var i = 0; i < me.inputs.length; i++) { 
	// 				var s = me.inputs[i];
	// 				if (me[s] != undefined ) { 
	// 					o[s] = me[s]; 
	// 				};
	// 			}
	// 		}
	// 		if (me.config !== {} ) {
	// 			Ext.apply(o, me.config);
	// 		};
	// 		me.extjsObject = Ext.create(o);
	// 		me.ready.next(me);
	// 	}
	// }



}
