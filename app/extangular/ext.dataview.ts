import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extdataviewMetaData {
	public static XTYPE: string = 'dataview';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'allowDeselect',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'deferEmptyText',
		'deselectOnContainerClick',
		'disabled',
		'disableSelection',
		'docked',
		'draggable',
		'emptyText',
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
		'inline',
		'itemCls',
		'itemConfig',
		'itemId',
		'items',
		'itemTpl',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lastFocused',
		'lastSelected',
		'layout',
		'left',
		'listeners',
		'loadingText',
		'locked',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxItemCache',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'mode',
		'padding',
		'plugins',
		'pressedDelay',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'scrollToTopOnRefresh',
		'selection',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'store',
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
		'triggerCtEvent',
		'triggerEvent',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'useComponents',
		'userCls',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,dataview,oldActiveItem'},
		{name:'add',parameters:''},
		{name:'added',parameters:'dataview,container,index'},
		{name:'beforehide',parameters:'dataview'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeselectionchange',parameters:'dataview'},
		{name:'beforeshow',parameters:'dataview'},
		{name:'beforetofront',parameters:'dataview'},
		{name:'containertap',parameters:''},
		{name:'deactivate',parameters:'oldActiveItem,dataview,newActiveItem'},
		{name:'deselect',parameters:'dataview,record,supressed'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'dataview'},
		{name:'floatingchange',parameters:'dataview,positioned'},
		{name:'fullscreen',parameters:'dataview'},
		{name:'hide',parameters:'dataview'},
		{name:'initialize',parameters:'dataview'},
		{name:'itemdoubletap',parameters:'dataview,index,target,record,e'},
		{name:'itemmouseenter',parameters:'dataview,index,target,record,e'},
		{name:'itemmouseleave',parameters:'dataview,index,target,record,e'},
		{name:'itemsingletap',parameters:'dataview,index,target,record,e'},
		{name:'itemswipe',parameters:'dataview,index,target,record,e'},
		{name:'itemtap',parameters:'dataview,index,target,record,e'},
		{name:'itemtaphold',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchend',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchmove',parameters:'dataview,index,target,record,e'},
		{name:'itemtouchstart',parameters:'dataview,index,target,record,e'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'dataview,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'dataview,positioned'},
		{name:'refresh',parameters:'dataview'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'dataview,container,index'},
		{name:'renderedchange',parameters:'dataview,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'select',parameters:'dataview,record'},
		{name:'selectionchange',parameters:'dataview,records'},
		{name:'show',parameters:'dataview'},
		{name:'tofront',parameters:'dataview'},
		{name:'updatedata',parameters:'dataview,newData'}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeselectionchange',
		'beforeshow',
		'beforetofront',
		'containertap',
		'deactivate',
		'deselect',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'select',
		'selectionchange',
		'show',
		'tofront',
		'updatedata'
];
}
@Component({
  selector: 'ext-' + extdataviewMetaData.XTYPE,
	inputs: extdataviewMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extdataviewMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extdataview)}],
	template: '<template #dynamic></template>'
})
export class extdataview extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extdataviewMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
