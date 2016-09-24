// import { 
// 	Component, 
// 	ElementRef ,
// 	ComponentFactoryResolver,
// 	ComponentRef,
// 	ViewChild,
// 	ViewContainerRef
// } from '@angular/core';
// import { OutletComponent } from '../view/main/outlet.component';

// @Component({
// 	selector: 'extjs-router',
// 	inputs: [],
// 	outputs: [ ], 
// 	template: `
// 	<template #dynamicTarget></template>
// 	`
// })

// //<router-outlet></router-outlet>
// //<ng-content></ng-content>

// export class ExtJSRouter {
// 	@ViewChild('dynamicTarget', { read: ViewContainerRef }) private dynamicTarget: any;
// 	componentFactoryResolver: ComponentFactoryResolver;

// 	constructor(
// 		myElement: ElementRef, 
// 		componentFactoryResolver: ComponentFactoryResolver 
// 	)
// 	{
// 		this.componentFactoryResolver = componentFactoryResolver;
// 		var rootElement = myElement.nativeElement;
// 		let o: any = {
// 			xtype: 'container',
// 			flex: 1,
// 			html: '<div id="theOutlet"></div>aa',
// 			//html: '<router-outlet></router-outlet>',
// 			renderTo: rootElement
// 		};
// 		var extjsObject = Ext.create(o);
// 	}

// 	ngOnInit() {
// 			var componentRef: ComponentRef<any>;
// 			var componentFactory;
// 			var me = this;
// 			//debugger;
// 			setTimeout(function(){ 
// 				componentFactory = me.componentFactoryResolver.resolveComponentFactory(OutletComponent);
// 				componentRef = me.dynamicTarget.createComponent(componentFactory);
// 				var node = document.getElementById('theOutlet');
// 				console.log(componentFactory);
// 				//me.renderer.attachViewAfter(node,[me.componentRef]); why doesn' this work?
// 				node.appendChild(componentRef['_hostElement'].nativeElement);
// 			}, 1);
// 	}
// }