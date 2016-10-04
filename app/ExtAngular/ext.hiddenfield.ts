import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class exthiddenfieldMetaData {
	public static XTYPE: string = 'hiddenfield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'clearIcon',
		'cls',
		'component',
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
		'inputCls',
		'inputType',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'name',
		'padding',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
		'record',
		'reference',
		'relative',
		'renderTo',
		'required',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tabIndex',
		'textAlign',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'triggers',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'userCls',
		'value',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex'
];
	public static OUTPUTS: any[] = [
		{name:'action',parameters:'hiddenfield,e'},
		{name:'added',parameters:'hiddenfield,container,index'},
		{name:'beforehide',parameters:'hiddenfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'hiddenfield'},
		{name:'beforetofront',parameters:'hiddenfield'},
		{name:'blur',parameters:'hiddenfield,e'},
		{name:'change',parameters:'hiddenfield,newValue,oldValue'},
		{name:'clearicontap',parameters:'hiddenfield,input,e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'hiddenfield'},
		{name:'floatingchange',parameters:'hiddenfield,positioned'},
		{name:'focus',parameters:'hiddenfield,e'},
		{name:'fullscreen',parameters:'hiddenfield'},
		{name:'hide',parameters:'hiddenfield'},
		{name:'initialize',parameters:'hiddenfield'},
		{name:'keyup',parameters:'hiddenfield,e'},
		{name:'mousedown',parameters:'hiddenfield,e'},
		{name:'moved',parameters:'hiddenfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'hiddenfield,e'},
		{name:'positionedchange',parameters:'hiddenfield,positioned'},
		{name:'removed',parameters:'hiddenfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'hiddenfield'},
		{name:'tofront',parameters:'hiddenfield'},
		{name:'updatedata',parameters:'hiddenfield,newData'}
];
	public static OUTPUTNAMES: string[] = [
		'action',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'change',
		'clearicontap',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tofront',
		'updatedata'
];
}
@Component({
  selector: 'ext-' + exthiddenfieldMetaData.XTYPE,
	inputs: exthiddenfieldMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: exthiddenfieldMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => exthiddenfield)}],
	template: '<template #dynamic></template>'
})
export class exthiddenfield extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,exthiddenfieldMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
