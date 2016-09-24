// /// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
// import {
// 	Renderer,
// 	ApplicationRef,
// 	NgZone,
// 	Directive,
// 	ChangeDetectorRef,
// 	Injector,
// 	ComponentFactory,
// 	//ComponentMetadata,
// 	ReflectiveInjector,
// 	Component, 
// 	ComponentRef,
// 	TemplateRef,
// 	ContentChildren, 
// 	ContentChild,
// 	ViewChildren,
// 	ViewChild,
// 	ViewContainerRef,
// 	ComponentFactoryResolver,
// 	Compiler,
// 	QueryList, 
// 	AfterContentInit, 
// 	AfterViewInit, 
// 	Input, 
// 	OnInit, 
// 	Attribute, 
// 	ElementRef, 
// 	EventEmitter } from '@angular/core';
// import { SimpleComponent } from '../view/items/simple.component';
// import { FooterComponent } from '../view/main/footer.component';
// import { TabsClientComponent } from '../view/tabs/tabsclient.component';
// import { OutletComponent } from '../view/main/outlet.component';

// @Component({
// 	selector: 'extjs',
// 	inputs: [ 'xtype', 'layout', 'docked', 'flex', 'fit', 'config'],
// 	outputs: [ 'ready', 'select', 'selectionchange', 'tapit' ], //'click', 'selectionchange'],
// 	template: `
// 		<template #dynamicTarget></template>
// 	`
// })

// //<ng-content></ng-content>

// export class ExtJS implements AfterContentInit, AfterViewInit, OnInit {
// 	@ContentChildren(ExtJS) ExtJSComponents: QueryList<ExtJS>;
// 	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: any;
// 	@ContentChild('replace', { read: ViewContainerRef }) private replaceCC: any;
// 	@ViewChild('replace', { read: ViewContainerRef }) private replaceVC: any;
// 	@ContentChildren('*') allViews: QueryList<any>;
// 	protected componentRef: ComponentRef<any>;

// 	public extjsObject: any;
// 	public fit: boolean;
// 	public flex: number;
// 	public myElement: any;
// 	public rootElement: any;
// 	public componentFactoryResolver: ComponentFactoryResolver;
// 	public viewContainerRef: ViewContainerRef;
// 	public compiler: Compiler;
// 	public changeDetectorRef: ChangeDetectorRef;
// 	public applicationRef: ApplicationRef;
// 	public ngZone: NgZone;
// 	public renderer: Renderer;

// 	constructor(
// 		renderer:Renderer,
// 		ngZone:NgZone,
// 		applicationRef:ApplicationRef,
// 		changeDetectorRef:ChangeDetectorRef,
// 		@Attribute('fit') fit: boolean, 
// 		@Attribute('flex') flex: number, 
// 		myElement: ElementRef, 
// 		//templateRef: TemplateRef<dynamicTarget>, 
// 		componentFactoryResolver: ComponentFactoryResolver, 
// 		viewContainerRef: ViewContainerRef, 
// 		compiler: Compiler
// 	)
// 	{
// 		this.renderer = renderer;
// 		this.ngZone = ngZone;
// 		this.applicationRef = applicationRef;
// 		this.changeDetectorRef = changeDetectorRef;
// 		this.fit = fit;
// 		this.flex = flex;
// 		this.myElement = myElement;
// 		this.rootElement = myElement.nativeElement;
// 		//viewContainerRef.createEmbeddedView(TemplateRef<SpendingDetailComponent>)
// 		this.componentFactoryResolver = componentFactoryResolver;
// 		this.viewContainerRef = viewContainerRef;
// 		this.compiler = compiler;
// 		this['ready'] = new EventEmitter();
// 		this['select'] = new EventEmitter();
// 		this['selectionchange'] = new EventEmitter();
// 		this['tapit'] = new EventEmitter();
// 	}

// 	ngAfterContentInit() {
// 		//console.log('ngAfterContentInit: ' + this.ExtJSComponents);

// 		//console.log('CC: ' + this.replaceCC);
// 		//console.log('VC: ' + this.replaceVC);
// 		//console.log('allViews: ' + this.allViews.length);
// 		//console.log('ExtJS: ' + this.ExtJSComponents.length);
// 		//console.log(this.ExtJSComponents.first.extjsObject.xtype);


// 		if (this.ExtJSComponents.length == 1) {
// 			//console.log(this.ExtJSComponents.first.extjsObject.xtype);
// 			//var inj: Injector = this.viewContainerRef.parentInjector;
// 			//is it all by itself or in a nested situation
// 			if (1 == this.viewContainerRef.parentInjector["_nodeIndex"]) {
// 				var parent: any = this.ExtJSComponents.first.extjsObject;
// 				parent.setRenderTo(this.rootElement);
// 			}
// 		}

// 		if (this.ExtJSComponents.length > 1) {
// 			var parent: any = this.ExtJSComponents.first.extjsObject;
// 			parent.setRenderTo(this.rootElement);

// 			var array: any = this.ExtJSComponents.toArray();
// 			var arrayLength = array.length;
// 			for (var i = 1; i < arrayLength; i++) {
// 				var obj = array[i].extjsObject;
// 				parent.add(obj);
// 				if (obj.component != undefined) {
// 					console.log(obj.xtype + ' - ' + obj.component + ' - ' + obj.item);
// 					var me = this;
// 					var o = obj;
// 					var componentFactory;
// 					setTimeout(function(){ 
// 						switch(o.component) {
// 							case 'simple':
// 								componentFactory = me.componentFactoryResolver.resolveComponentFactory(SimpleComponent);
// 								break;
// 							case 'footer':
// 								componentFactory = me.componentFactoryResolver.resolveComponentFactory(FooterComponent);
// 								break;
// 							case 'tabs':
// 								componentFactory = me.componentFactoryResolver.resolveComponentFactory(TabsClientComponent);
// 								break;
// 							case 'outlet':
// 								componentFactory = me.componentFactoryResolver.resolveComponentFactory(OutletComponent);
// 								break;
// 						};
// 						me.componentRef = me.dynamicTarget.createComponent(componentFactory);
// 						//me.componentRef.instance.message = 'hi';
// 						var node = document.getElementById(o.item);
// 						console.log(componentFactory);
// 						//me.renderer.attachViewAfter(node,[me.componentRef]); why doesn' this work?
// 						node.appendChild(me.componentRef['_hostElement'].nativeElement);
// 					}, 1);
// 				}
// 			}
// 		}

// 		if (this.ExtJSComponents.length == 99) {
// 			//var c = Ext.create('Ext.Container',{html: '<div id="theTest"></div>'})
// 			//parent.add(c);

// 			// var me = this;
// 			// setTimeout(function(){ 
// 			// 	var simpleComponent = me.componentFactoryResolver.resolveComponentFactory(SimpleComponent);
// 			// 	me.componentRef = me.dynamicTarget.createComponent(simpleComponent);
// 			// 	var node = document.getElementById("simple");
// 			// 	node.appendChild(me.componentRef['_hostElement'].nativeElement);
// 			// }, 10);
			
// 				//me.renderer.attachViewAfter(node,[me.componentRef]);
			
// 			// //debugger;
// 			// //var cln = this.dynamicTarget._element.nestedViews[0].allNodes[0].childNodes[2].cloneNode(true);
// 			// var me=this;
// 			// setTimeout(function(){ 
// 			// 	var newParent = document.getElementById("theTest");
// 			// 	var oldParent = me.dynamicTarget._element.nestedViews[0].allNodes[0].children;
// 			// 	//debugger;
// 			// 	var length = oldParent.length;
// 			// 	console.log(oldParent[1])

// 			// 	for (var i = 0; i < length-1; i++) {
// 			// 		//debugger;
// 			// 		console.log(oldParent[i])
// 			// 		if (oldParent[i] != undefined) {
// 			// 			newParent.appendChild(oldParent[i]);
// 			// 		}
// 			// 	}
// 			// }, 10);





// 			// var cln = this.dynamicTarget._element.nestedViews[0].allNodes[0].cloneNode(false);
// 			// var me = this;
// 			// setTimeout(function(){ 
// 			// 	document.getElementById("theTest").appendChild(cln);
// 			// }, 10);

// 			// var cmpFactory = this.componentFactoryResolver.resolveComponentFactory(SimpleComponent);
// 			// const ctxInjector = this.dialogAnchor.compInsertPoint.injector;
// 			// cmpFactory.create(ctxInjector, null, '#dynCompDiv');

// 		}
// 	}

// 	ngAfterViewInit() {
// 		//console.log('ngAfterViewInit: ' + this.ExtJSComponents);
// 	}
 
// 	public ngOnInit() {
// 		//console.log('ngOnInit: ' + this.ExtJSComponents);
// 		let me: any  = this;
// 		if (me.rootElement.childElementCount === 0) {
// 			let o: any = {
// 				xtype: me.xtype,
// 				layout: me.layout,
// 				docked: me.docked,
// 				//flex: me.flex,
// 				//top: 0, left:0, width: '100%', height: '100%',
// 				//renderTo: me.rootElement
// 			};
// 			if (true == me.fit) {
// 				o.top=0, 
// 				o.left=0, 
// 				o.width='100%', 
// 				o.height='100%'
// 			}
// 			if (me.config !== {} ) {
// 				Ext.apply(o, me.config);
// 			};
// 			o.listeners = {};
// 			o.listeners['select'] = function(list, record, eOpts) {
// 				me.select.next({list: list, record: record, eOpts: eOpts});
// 			};
// 			o.listeners['selectionchange'] = function(list, node) {
// 				me.selectionchange.next({list: list, node: node});
// 			};
// 			o.listeners['tap'] = function(obj, e, eOpts) {
// 				me.tapit.next({obj: obj, e: e});
// 			};
// 			me.extjsObject = Ext.create(o);
// 			me.ready.next(me);
// 		}
// 	}
// }


// 				//me.applicationRef.tick();
// 				//me.changeDetectorRef.detectChanges();
// 				// me.ngZone.run(() => {
// 				//     console.log('ngZone.run');
// 				// });




// 	// private context: Object;
//   // private _createDynamicComponent() {
//   //   this.context = this.context || {};
//   //    const metadata = new ComponentMetadata({
//   //       selector: 'dynamic-html',
//   //       template: '<spendingdetail></spendingdetail>',
//   //   });
//   //   const cmpClass = class _ { };
//   //   cmpClass.prototype = this.context;
//   //   return Component(metadata)(cmpClass);
//   // }


//   // self = this;
//   // template = `
//   // <div>
//   // </div>`;