// /// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
// import { 
// 	Component, 
// 	Input, 
// 	//Output, 
// 	OnInit, 
// 	Attribute, 
// 	ElementRef, 
// 	EventEmitter } from '@angular/core';
// //import { ComponentUtil } from './componentUtil';

// @Component({
//   selector: 'extjs',
// 	inputs: [ 'xtype', 'config'],
// 	//outputs: ComponentUtil.EVENTS,

// 	outputs: [ 'ready', 'select' ], //'click', 'selectionchange'],
// 	template: ``
// })
// export class ExtJS {
// 	//@Input() private xtype: string;
// 	//private config: any = {};
// 	//@Input() private config: any = {};
	
// 	//private click: EventEmitter<any> = new EventEmitter();
// 	//private selectionchange: EventEmitter<any> = new EventEmitter();

// 	public extjsObject: any;
// 	private rootElement: any;
// 	//private fit: boolean = false;

// 	constructor(myElement: ElementRef) {
// //		debugger;
// 	//constructor(myElement: ElementRef, fit: any) {
// 		this['ready'] = new EventEmitter();
// 		this['select'] = new EventEmitter();




// 		// ComponentUtil.EVENTS.forEach( (eventName) => {
// 		// 		(<any>this)[eventName] = new EventEmitter();
// 		// });


// 		// if (fit === null) {
// 		// 	this.fit = false;
// 		// } else {
// 		// 	this.fit = true;
// 		// }
// 		//console.log(this.fit);
// 		this.rootElement = myElement.nativeElement;
// 	}

// 	public ngOnInit() {
// 		let me: any  = this;
// 		if (me.rootElement.childElementCount === 0) {
// 			let o: any = {
// 				xtype: me.xtype,
// 				top: 0, left:0, width: '100%', height: '100%',
// 				renderTo: me.rootElement,
// 			};



// 				//text: me.text,
// 				// listeners: {
// 				// 	scope: me,
// 				// 	selectionchange: function(tree, node) {
// 				// 		var o:any = {};
// 				// 		o.tree = tree;
// 				// 		o.node = node;
// 				// 		me.selectionchange.next(o);
// 				// 	},
// 				// 	click: function(o, e, eOpts) {
// 				// 		//me.exttap.emit({});
// 				// 		me.click.next();

// 				// 		// setTimeout(function() {
// 				// 		// 	me.exttap.emit({})
// 				// 		// }, 1000);
// 				// 		// me.exttap.emit({
// 				// 		// 	o: o,
// 				// 		// 	e: e,
// 				// 		// 	eOpts: eOpts
// 				// 		// })
// 				// 	}
// 				// }

// 			// o.on('click', function(o, e, eOpts) {
// 			// 			me.click.next();
// 			// });

// 			//o.plugins = [{ ptype: 'fittoparent' }]; 
// 			//o.height = 800; 
// 			//if (me.fit === true) {
// 			//	o.plugins = [ 'fittoparent' ]; 
// 			//} else {
// 			//	o.height = 300; 
// 			//};
// 			//if (me.listeners !== [] ) {o.listeners = me.listeners; };
// 			//if (me.plugins !== [] ) {o.plugins = me.plugins; };
// 			// if (me.fit === true ) {
// 			// 	if (o.plugins != undefined) {
// 			// 		o.plugins.push({ ptype: 'fittoparent' });
// 			// 	} else {
// 			// 		o.plugins = [{ ptype: 'fittoparent' }]; 
// 			// 	}
// 			// } 
// 			// else {
// 			// //	o.height = 300; 
// 			// };
// 			if (me.config !== {} ) {
// 				Ext.apply(o, me.config);
// 			};
// 			// o.listeners = {
// 			// 	'select': me.select.next()
// 			// };
// 			o.listeners = {};

// 			o.listeners['select'] = function(list, record, eOpts) {
// 						me.select.next({list: list, record: record, eOpts: eOpts});
// 			};

// 			//debugger;
// 			// o.listeners('click') = function(o, e, eOpts) {
// 			// 			me.click.next();
// 			// };
// 			me.extjsObject = Ext.create(o);
// 			me.ready.next(me);
// 		}

// 		// setTimeout(function() {
// 		// 	me.exttap.emit({})
// 		// }, 5000);

// 		// let iDiv = document.createElement('div');
// 		// iDiv.innerHTML = "hello";
// 		// iDiv.addEventListener('click', function (event) {
// 		// 	me.exttap.emit({});
// 		// });
// 		// me.rootElement.appendChild(iDiv);

// 	}

// }