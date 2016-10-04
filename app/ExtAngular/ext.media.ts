import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extmediaMetaData {
	public static XTYPE: string = 'media';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoPause',
		'autoResume',
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
		'enableControls',
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
		'loop',
		'margin',
		'maxHeight',
		'maxWidth',
		'media',
		'minHeight',
		'minWidth',
		'modal',
		'muted',
		'padding',
		'plugins',
		'preload',
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
		'twoWayBindable',
		'ui',
		'url',
		'useBodyElement',
		'userCls',
		'viewModel',
		'volume',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'media,container,index'},
		{name:'beforehide',parameters:'media'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'media'},
		{name:'beforetofront',parameters:'media'},
		{name:'destroy',parameters:''},
		{name:'ended',parameters:'media,time'},
		{name:'erased',parameters:'media'},
		{name:'floatingchange',parameters:'media,positioned'},
		{name:'fullscreen',parameters:'media'},
		{name:'hide',parameters:'media'},
		{name:'initialize',parameters:'media'},
		{name:'moved',parameters:'media,container,toIndex,fromIndex'},
		{name:'mutedchange',parameters:'media,muted'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pause',parameters:'media,time'},
		{name:'play',parameters:'media'},
		{name:'positionedchange',parameters:'media,positioned'},
		{name:'removed',parameters:'media,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'media'},
		{name:'stop',parameters:'media'},
		{name:'timeupdate',parameters:'media,time'},
		{name:'tofront',parameters:'media'},
		{name:'updatedata',parameters:'media,newData'},
		{name:'volumechange',parameters:'media,volume'}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'destroy',
		'ended',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'moved',
		'mutedchange',
		'orientationchange',
		'painted',
		'pause',
		'play',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'stop',
		'timeupdate',
		'tofront',
		'updatedata',
		'volumechange'
];
}
@Component({
  selector: 'ext-' + extmediaMetaData.XTYPE,
	inputs: extmediaMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extmediaMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extmedia)}],
	template: '<template #dynamic></template>'
})
export class extmedia extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extmediaMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
