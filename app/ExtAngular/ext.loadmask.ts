import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extloadmaskMetaData {
	public static XTYPE: string = 'loadmask';
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
		'indicator',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'message',
		'messageCls',
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
		{name:'added',parameters:'loadmask,container,index'},
		{name:'beforehide',parameters:'loadmask'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'loadmask'},
		{name:'beforetofront',parameters:'loadmask'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'loadmask'},
		{name:'floatingchange',parameters:'loadmask,positioned'},
		{name:'fullscreen',parameters:'loadmask'},
		{name:'hide',parameters:'loadmask'},
		{name:'initialize',parameters:'loadmask'},
		{name:'moved',parameters:'loadmask,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'loadmask,positioned'},
		{name:'removed',parameters:'loadmask,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'loadmask'},
		{name:'tap',parameters:'loadmask,e'},
		{name:'tofront',parameters:'loadmask'},
		{name:'updatedata',parameters:'loadmask,newData'}
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
  selector: 'ext-' + extloadmaskMetaData.XTYPE,
	inputs: extloadmaskMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extloadmaskMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extloadmask)}],
	template: '<template #dynamic></template>'
})
export class extloadmask extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extloadmaskMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
