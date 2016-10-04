import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extwidgetMetaData {
	public static XTYPE: string = 'widget';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'baseCls',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
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
		'session',
		'shadow',
		'shim',
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
		{name:'beforetofront',parameters:'widget'},
		{name:'tofront',parameters:'widget'}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront'
];
}
@Component({
  selector: 'ext-' + extwidgetMetaData.XTYPE,
	inputs: extwidgetMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extwidgetMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extwidget)}],
	template: '<template #dynamic></template>'
})
export class extwidget extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extwidgetMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
