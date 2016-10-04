import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extpaneltitleMetaData {
	public static XTYPE: string = 'paneltitle';
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
		'glyph',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
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
		'text',
		'textAlign',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
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
		{name:'added',parameters:'paneltitle,container,index'},
		{name:'beforehide',parameters:'paneltitle'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'paneltitle'},
		{name:'beforetofront',parameters:'paneltitle'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'paneltitle'},
		{name:'floatingchange',parameters:'paneltitle,positioned'},
		{name:'fullscreen',parameters:'paneltitle'},
		{name:'hide',parameters:'paneltitle'},
		{name:'initialize',parameters:'paneltitle'},
		{name:'moved',parameters:'paneltitle,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'paneltitle,positioned'},
		{name:'removed',parameters:'paneltitle,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'paneltitle'},
		{name:'tofront',parameters:'paneltitle'},
		{name:'updatedata',parameters:'paneltitle,newData'}
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
		'tofront',
		'updatedata'
];
}
@Component({
  selector: 'ext-' + extpaneltitleMetaData.XTYPE,
	inputs: extpaneltitleMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extpaneltitleMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extpaneltitle)}],
	template: '<template #dynamic></template>'
})
export class extpaneltitle extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extpaneltitleMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
