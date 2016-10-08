import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.grid.HeaderContainer
class extheadercontainerMetaData {
	public static XTYPE: string = 'headercontainer';
	public static INPUTNAMES: string[] = [
		'activeItem',
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
		'defaultColumnUI',
		'defaultListenerScope',
		'defaults',
		'defaultType',
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
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
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
		'referenceHolder',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'sortable',
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
		'useBodyElement',
		'userCls',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'fit',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,headercontainer,oldActiveItem'},
		{name:'add',parameters:'headercontainer,item,index'},
		{name:'added',parameters:'headercontainer,container,index'},
		{name:'beforehide',parameters:'headercontainer'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'headercontainer'},
		{name:'beforetofront',parameters:'headercontainer'},
		{name:'deactivate',parameters:'oldActiveItem,headercontainer,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'headercontainer'},
		{name:'floatingchange',parameters:'headercontainer,positioned'},
		{name:'fullscreen',parameters:'headercontainer'},
		{name:'hide',parameters:'headercontainer'},
		{name:'initialize',parameters:'headercontainer'},
		{name:'move',parameters:'headercontainer,item,toIndex,fromIndex'},
		{name:'moved',parameters:'headercontainer,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'headercontainer,positioned'},
		{name:'remove',parameters:'headercontainer,item,index'},
		{name:'removed',parameters:'headercontainer,container,index'},
		{name:'renderedchange',parameters:'headercontainer,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'headercontainer'},
		{name:'tofront',parameters:'headercontainer'},
		{name:'updatedata',parameters:'headercontainer,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'deactivate',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'ext-' + extheadercontainerMetaData.XTYPE,
	inputs: extheadercontainerMetaData.INPUTNAMES,
	outputs: extheadercontainerMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extheadercontainer)}],
	template: '<template #dynamic></template>'
})
export class extheadercontainer extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extheadercontainerMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extheadercontainerMetaData);}
}
