
/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import {AfterContentInit,AfterViewInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
	ElementRef,EventEmitter,OnInit,QueryList,Type,ViewChild,ViewContainerRef
} from '@angular/core';

export class extbase{
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;
	private nofit: any;

	constructor(
		private myElement: any, 
		private componentFactoryResolver: ComponentFactoryResolver, 
		private viewContainerRef: ViewContainerRef, 
		private metaData: any
		) {
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

	AfterContentInit(ExtJSBaseRef) {
		debugger;
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
			if (me[prop] != undefined && 
					prop != 'config' && 
					prop != 'nofit') { 
				o[prop] = me[prop]; 
			};
		}
		// if (true == me.fit) {
		// 	o.top=0, 
		// 	o.left=0, 
		// 	o.width='100%', 
		// 	o.height='100%'
		// }
		if (me.config !== {} ) {
			Ext.apply(o, me.config);
		};
		debugger;
		me.extjsObject = Ext.create(o);

		var componentFactory: ComponentFactory<any>;
		var type: Type<any>;

		if (me.component != undefined) {
			type = me.component;
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
}

	