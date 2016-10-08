import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.form.Panel
class extformpanelMetaData {
	public static XTYPE: string = 'formpanel';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'api',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'baseParams',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'docked',
		'draggable',
		'enableSubmissionForm',
		'enctype',
		'enterAnimation',
		'exitAnimation',
		'fieldSeparators',
		'flex',
		'floated',
		'fullscreen',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconCls',
		'id',
		'inputBorders',
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
		'method',
		'minHeight',
		'minWidth',
		'modal',
		'multipartDetection',
		'padding',
		'paramOrder',
		'paramsAsHash',
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
		'standardSubmit',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'submitOnAction',
		'timeout',
		'title',
		'toFrontOnShow',
		'tools',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'trackResetOnLoad',
		'translatable',
		'twoWayBindable',
		'ui',
		'url',
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
		{name:'activate',parameters:'newActiveItem,formpanel,oldActiveItem'},
		{name:'add',parameters:'formpanel,item,index'},
		{name:'added',parameters:'formpanel,container,index'},
		{name:'beforehide',parameters:'formpanel'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'formpanel'},
		{name:'beforesubmit',parameters:'formpanel,values,options,e'},
		{name:'beforetofront',parameters:'formpanel'},
		{name:'deactivate',parameters:'oldActiveItem,formpanel,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'formpanel'},
		{name:'exception',parameters:'formpanel,result'},
		{name:'floatingchange',parameters:'formpanel,positioned'},
		{name:'fullscreen',parameters:'formpanel'},
		{name:'hide',parameters:'formpanel'},
		{name:'initialize',parameters:'formpanel'},
		{name:'move',parameters:'formpanel,item,toIndex,fromIndex'},
		{name:'moved',parameters:'formpanel,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'formpanel,positioned'},
		{name:'remove',parameters:'formpanel,item,index'},
		{name:'removed',parameters:'formpanel,container,index'},
		{name:'renderedchange',parameters:'formpanel,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'formpanel'},
		{name:'submit',parameters:'formpanel,result,e'},
		{name:'tofront',parameters:'formpanel'},
		{name:'updatedata',parameters:'formpanel,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforesubmit',
		'beforetofront',
		'deactivate',
		'destroy',
		'erased',
		'exception',
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
		'submit',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'ext-' + extformpanelMetaData.XTYPE,
	inputs: extformpanelMetaData.INPUTNAMES,
	outputs: extformpanelMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extformpanel)}],
	template: '<template #dynamic></template>'
})
export class extformpanel extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extformpanelMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extformpanelMetaData);}
}
