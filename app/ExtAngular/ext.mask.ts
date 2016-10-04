import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extmaskMetaData {
	public static XTYPE: string = 'mask';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'transparent',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'userCls',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'mask,container,index'},
		{name:'beforehide',parameters:'mask'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'mask'},
		{name:'beforetofront',parameters:'mask'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'mask'},
		{name:'floatingchange',parameters:'mask,positioned'},
		{name:'fullscreen',parameters:'mask'},
		{name:'hide',parameters:'mask'},
		{name:'initialize',parameters:'mask'},
		{name:'moved',parameters:'mask,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'mask,positioned'},
		{name:'removed',parameters:'mask,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'mask'},
		{name:'tap',parameters:'mask,e'},
		{name:'tofront',parameters:'mask'},
		{name:'updatedata',parameters:'mask,newData'}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tap',
		'tofront',
		'updatedata'
];
}
@Component({
  selector: 'ext-' + extmaskMetaData.XTYPE,
	inputs: extmaskMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extmaskMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extmask)}],
	template: '<template #dynamic></template>'
})
export class extmask extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extmaskMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
