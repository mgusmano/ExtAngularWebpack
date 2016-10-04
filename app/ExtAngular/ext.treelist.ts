import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class exttreelistMetaData {
	public static XTYPE: string = 'treelist';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'baseCls',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'defaults',
		'expanderOnly',
		'flex',
		'floated',
		'height',
		'hidden',
		'id',
		'itemId',
		'listeners',
		'plugins',
		'publishes',
		'reference',
		'relative',
		'selection',
		'selectOnExpander',
		'session',
		'shadow',
		'shim',
		'singleExpand',
		'store',
		'style',
		'toFrontOnShow',
		'touchAction',
		'translatable',
		'twoWayBindable',
		'ui',
		'userCls',
		'viewModel',
		'width',
		'x',
		'y'
];
	public static OUTPUTS: any[] = [
		{name:'beforetofront',parameters:'treelist'},
		{name:'tofront',parameters:'treelist'}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront'
];
}
@Component({
  selector: 'ext-' + exttreelistMetaData.XTYPE,
	inputs: exttreelistMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: exttreelistMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => exttreelist)}],
	template: '<template #dynamic></template>'
})
export class exttreelist extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,exttreelistMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
