import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extsliderMetaData {
	public static XTYPE: string = 'slider';
	public static INPUTNAMES: string[] = [
		'allowThumbsOverlapping',
		'alwaysOnTop',
		'animation',
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
		'increment',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxValue',
		'maxWidth',
		'minHeight',
		'minValue',
		'minWidth',
		'modal',
		'padding',
		'plugins',
		'publishes',
		'readOnly',
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
		'thumbDefaults',
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
		'value',
		'valueIsArray',
		'values',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'slider,container,index'},
		{name:'beforehide',parameters:'slider'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'slider'},
		{name:'beforetofront',parameters:'slider'},
		{name:'change',parameters:'slider,thumb,newValue,oldValue'},
		{name:'destroy',parameters:''},
		{name:'drag',parameters:'slider,thumb,e'},
		{name:'dragend',parameters:'slider,thumb,value,e'},
		{name:'dragstart',parameters:'slider,thumb,value,e'},
		{name:'erased',parameters:'slider'},
		{name:'floatingchange',parameters:'slider,positioned'},
		{name:'fullscreen',parameters:'slider'},
		{name:'hide',parameters:'slider'},
		{name:'initialize',parameters:'slider'},
		{name:'moved',parameters:'slider,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'slider,positioned'},
		{name:'removed',parameters:'slider,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'slider'},
		{name:'tofront',parameters:'slider'},
		{name:'updatedata',parameters:'slider,newData'}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'change',
		'destroy',
		'drag',
		'dragend',
		'dragstart',
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
  selector: 'ext-' + extsliderMetaData.XTYPE,
	inputs: extsliderMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extsliderMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extslider)}],
	template: '<template #dynamic></template>'
})
export class extslider extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extsliderMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
