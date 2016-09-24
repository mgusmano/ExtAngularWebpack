// /// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
// //import { AppModuleM } from '../appM';
// //import { BrowserModule } from '@angular/platform-browser';
// import {
// 	AfterContentInit, 
// 	Attribute, 
// 	//Compiler,
// 	//NgModuleRef,
// 	Component, 
// 	ComponentFactory,
// 	//ModuleWithComponentFactories,
// 	ComponentRef,
// 	ComponentFactoryResolver,
// 	ContentChildren,
// 	ElementRef,
// 	EventEmitter,
// 	//Injector,
// 	Input,
// 	OnDestroy,
// 	OnInit,
// 	QueryList,
// 	Type, 
// 	ViewChild,
// 	ViewContainerRef
// } from '@angular/core';

// import { SimpleComponent } from '../view/items/simple.component';
// import { FooterComponent } from '../view/main/footer.component';
// import { TabsClientComponent } from '../view/tabs/tabsclient.component';
// import { OutletComponent } from '../view/main/outlet.component';
// import { SideBarComponent } from '../view/main/sidebar.component';
// import { WelcomeComponent } from '../view/main/welcome.component';
// import { MenuComponent } from '../view/main/menu.component';
// import { ActionsComponent } from '../view/main/actions.component';

// @Component({
// 	selector: 'extjs',
// 	inputs: [ 'docked', 'flex', 'fit'],
// 	outputs: [ 'ready', 'select', 'selectionchange', 'tapit' ], //'click', 'selectionchange'],
// 	template: `
// 		<template #dynamicTarget></template>
// 	`
// })

// export class ExtJS implements AfterContentInit, OnInit {
// 	@ContentChildren(ExtJS, { read: ViewContainerRef }) ExtJSComponentsRef: QueryList<ViewContainerRef>;
// 	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: ViewContainerRef;
// 	protected componentRef: ComponentRef<any>;
// 	@Input() xtype;
// 	@Input() layout;
// 	@Input() config;
// 	@Input() parent;
// 	@Input() ng2component;
// 	//private config;
// 	public extjsObject: any;
// 	public fit: boolean;
// 	public flex: number;
// 	public myElement: any;
// 	public rootElement: any;
// 	public componentFactoryResolver: ComponentFactoryResolver;
// 	public viewContainerRef: ViewContainerRef;
// 	//public _ngModuleRef: NgModuleRef<any>;
// 	//public _compiler: Compiler;
// 	//public _injector: Injector;

// 	constructor(
// 		//m: ModuleWithComponentFactories<AppModuleM>,
// 		//injector: Injector,
// 		//compiler: Compiler,
// 		//ngModuleRef: NgModuleRef<any>,
// 		@Attribute('fit') fit: boolean, 
// 		@Attribute('flex') flex: number, 
// 		myElement: ElementRef, 
// 		componentFactoryResolver: ComponentFactoryResolver, 
// 		viewContainerRef: ViewContainerRef
// 	)
// 	{
// 		//this._m = m;
// 		//this._injector = injector;
// 		//this._compiler = compiler;
// 		//this._ngModuleRef = ngModuleRef;
// 		this.fit = fit;
// 		this.flex = flex;
// 		this.myElement = myElement;
// 		this.rootElement = myElement.nativeElement;
// 		this.componentFactoryResolver = componentFactoryResolver;
// 		this.viewContainerRef = viewContainerRef;

// 		this['ready'] = new EventEmitter();
// 		this['select'] = new EventEmitter();
// 		this['selectionchange'] = new EventEmitter();
// 		this['tapit'] = new EventEmitter();



// 	}




// 	// createWrapper(): any {
// 	// 	// var core_1 = require('@angular/core');
// 	// 	// debugger;
// 	// 	// var WrapperComponent  =
// 	// 	// 	core_1.Component({
// 	// 	// 		selector: 'wrapper',
// 	// 	// 		template: '<tabs></tabs>hi'
// 	// 	// 	})
// 	// 	// 	.Class({
// 	// 	// 		constructor: function() {
// 	// 	// 			alert('hello');
// 	// 	// 		}
// 	// 	// 	});

// 	// 	@Component({
// 	// 		selector: 'wrapper',
// 	// 		template: '<tabs></tabs>hi'
// 	// 	})
// 	// 	class WrapperComponent {
// 	// 		constructor() {
// 	// 			alert('hi');
// 	// 		}
// 	// 	};
// 	// 	return WrapperComponent;
// 	// }

// 	// createComponent(): any {
// 	// 	let ctx: any;

// 	// 	const metadata = new Component({
// 	// 		selector: 'wrapper',
// 	// 		template: '<tabs></tabs>',
// 	// 	});

// 	// 	const cmpClass = class _ implements OnDestroy {
// 	// 	context = ctx;
// 	// 	ngOnDestroy() {
// 	// 		ctx = null;
// 	// 	}
// 	// };
// 	// return Component(metadata)(cmpClass);
// 	// }


// // provideRoutes(comp) {
// //   return [
// //     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: comp, multi: true}
// //   ];
// // }



// 	ngAfterContentInit() {
// 		//console.log(this.ExtJSComponentsRef.length);
// 		var extJSRootComponentRef : ViewContainerRef = this.ExtJSComponentsRef.first;
// 		var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;

// 		if (this.ExtJSComponentsRef.length == 1) {
// 			//if (1 == this.viewContainerRef.parentInjector["_nodeIndex"]) {
// 				firstExtJS.setRenderTo(this.rootElement);
// 			//}
// 		}

// 		if (this.ExtJSComponentsRef.length > 1) {
// 			firstExtJS.setRenderTo(this.rootElement);

// 			var ExtJSComponentRefArray: any = this.ExtJSComponentsRef.toArray();
// 			var arrayLength = ExtJSComponentRefArray.length;
// 			for (var i = 1; i < arrayLength; i++) {
// 				var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
// 				firstExtJS.add(obj);
// 			}
// 		}

// 		if (this.ExtJSComponentsRef.length == 3) {
// 			const ExtJSComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ExtJS)
// 			var newExtJS: ComponentRef<ExtJS> = extJSRootComponentRef.createComponent(ExtJSComponentFactory, 1);
// 			newExtJS.instance.xtype = 'container';
// 			newExtJS.instance.ng2component = '<simple></simple>';
// 			//newExtJS.instance.config ={  };
// 			newExtJS.instance.parent = firstExtJS;
// 			// need property for where in the items array this goes
// 		}
// 	}







// 	public ngOnInit() {
// //debugger;
// //this._ngModuleRef.

// //debugger;
// //var t = this._injector.get('tabs', 'no');



// 		let me: any  = this;
// //		if (me.rootElement.childElementCount === 0) {
// 			let o: any = {
// 				layout: me.layout,
// 				docked: me.docked,
// 			};
// 			if (me.ng2component != undefined) {
// 				o.xtype = 'container';
// 			}
// 			else {
// 				o.xtype = me.xtype;
// 			}
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
// 			var obj = me.extjsObject;
// 			var ng2component = me.ng2component;

// 			if (ng2component != undefined) {
// 				var componentFactory: ComponentFactory<any>;
// 				switch(ng2component) {
// 					case '<simple></simple>':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(SimpleComponent);
// 						break;
// 					case '<sidebar></sidebar>':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(SideBarComponent);
// 						break;
// 					case '<welcome></welcome>':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(WelcomeComponent);
// 						break;
// 					case '<menu2></menu2>':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(MenuComponent);
// 						break;
// 					case '<actions></actions>':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(ActionsComponent);
// 						break;
// 					case '<tabs></tabs>':

// //var wrapper = me.createWrapper();
// // var template1: string = '<tabs></tabs>';
// // @Component({template: template1}) class DynamicComponent {};


// // var dynCmp:Type<DynamicComponent> = DynamicComponent;

// // var simCmp:Type<SimpleComponent> = SimpleComponent;


// // //debugger; 




// // var template1: string = '<tabs></tabs>';
// // @Component({template: template1}) class DynamicComponent {};


// // this._compiler.compileModuleAndAllComponentsSync(.compileModuleSync(.compileComponentAsync(<any>this.pageHandler.descriptor.componentType).then(
// // 				(factory: ComponentFactory<any>) => {
// // 						let componentRef: ComponentRef<any> = this.container.createComponent(factory, 0, this._childInjector);
// // 						this.pageHandler.initialize(componentRef);
// // 				}
// // 		);





// // this._ngModule.declarations.push(DynamicComponent);
// // this._ngModule.entryComponents.push(DynamicComponent);


// // this._compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(
// //       factory => 
// // 			{
// // 				componentFactory=factory.componentFactories.find(x => x.componentType === DynamicComponent);
// // debugger;
// // 				me.componentRef = me.dynamicTarget.createComponent(componentFactory);
// // 				me.componentRef.instance.buttontext = 'testing';
// // 				var node = obj.innerElement.dom;
// // 				node.appendChild(me.componentRef['_hostElement'].nativeElement);



// // 			});






//     /// @NgModule({declarations: [HelloComponent]})
//   //class DynamicModule {}



// 						// debugger;
// 						// var s = me.ngModule;
// 						// var component = me.createComponent();
// 						// debugger;
// 						// var wrapper = me.createWrapper();

// //Injector.
// // var t = this._injector.get('tabs');
// // debugger;

// //Use ComponentFactoryResolver together with @NgModule/@Component.entryComponents or ANALYZE_FOR_ENTRY_COMPONENTS provider instead. For runtime compile only, you can also use Compiler.compileComponentSync/Async.


//   //  this._compiler.compileModuleSync(.compileComponentAsync(<any>this.pageHandler.descriptor.componentType).then(
//   //           (factory: ComponentFactory<any>) => {
//   //               let componentRef: ComponentRef<any> = this.container.createComponent(factory, 0, this._childInjector);
//   //               this.pageHandler.initialize(componentRef);
//   //           }
//   //       );




// 						//componentFactory = me.componentFactoryResolver.resolveComponentFactory(wrapper);
// 					//me.componentRef = me.dynamicTarget.createComponent(wrapper);
//   //this.parent.createComponent(childComponent);


//     // this.componentFactoryResolver.resolveComponentFactory((this.createWrapper()).then((factory:ComponentFactory<any>) => {
//     //       this.cmpRef = this.theBody.createComponent(factory)
//     //     });





// 						// 	//function(viewUtils,elementInjector,c,d,e) {
// 						// var componentFactoryIn: ComponentFactory<any> = new ComponentFactory<any>(
// 						// 	'tabs',
// 						// 	function(...args: any[]) {
// 						// 		//debugger;
// 						// 		//what to do here??
// 						// 	//return this.create(elementInjector); ??
// 						// 	}, 
// 						// 	Type
// 						// );
						








// 						//componentFactory = me.componentFactoryResolver.resolveComponentFactory(TabsClientComponent);
// //debugger;
// 						//me.componentRef = me.dynamicTarget.createComponent(componentFactoryIn);
// 						//debugger;
// 						//me.renderer.attachViewAfter(node,[me.viewContainerRef]); //why doesn' this work?

// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(TabsClientComponent);
// //						componentFactory = me.componentFactoryResolver.resolveComponentFactory(dynCmp);
// 						break;
// 					case 'outlet':
// 						componentFactory = me.componentFactoryResolver.resolveComponentFactory(OutletComponent);
// 						break;
// 				};

// 				//if (ng2component != '<tabs></tabs>') {
// 					me.componentRef = me.dynamicTarget.createComponent(componentFactory);
// 					me.componentRef.instance.buttontext = 'testing';
// 					var node = obj.innerElement.dom;
// 					node.appendChild(me.componentRef['_hostElement'].nativeElement);
// 				//}
// 			}

// 			if (me.parent != undefined) {
// 				me.parent.insert(0, me.extjsObject);
// 			}
// 			me.ready.next(me);
// //		}
// 	}
// }

// //me.applicationRef.tick();
// //me.changeDetectorRef.detectChanges();
// // me.ngZone.run(() => {
// //     console.log('ngZone.run');
// // });



// // ngOnChanges - called when an input binding value changes
// // ngOnInit - after the first ngOnChanges
// // ngDoCheck - after every run of change detection
// // ngAfterContentInit - after component content initialized
// // ngAfterContentChecked - after every check of component content
// // ngAfterViewInit - after component's view(s) are initialized
// // ngAfterViewChecked - after every check of a component's view(s)
// // ngOnDestroy - just before the component is destroyed

