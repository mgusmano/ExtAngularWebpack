import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extspacefillingMetaData {
	public static XTYPE: string = 'spacefilling';
	public static INPUTNAMES: string[] = [
		'animation',
		'axes',
		'background',
		'colors',
		'engine',
		'gradients',
		'highlightItem',
		'insetPadding',
		'interactions',
		'legend',
		'mainRect',
		'resizeHandler',
		'series',
		'sprites',
		'store',
		'style',
		'theme'
];
	public static OUTPUTS: any[] = [
		{name:'beforerefresh',parameters:'spacefilling'},
		{name:'bodyresize',parameters:'size'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'redraw',parameters:'spacefilling'},
		{name:'refresh',parameters:'spacefilling'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'storechange',parameters:'chart,newStore,oldStore'}
];
	public static OUTPUTNAMES: string[] = [
		'beforerefresh',
		'bodyresize',
		'itemclick',
		'itemdblclick',
		'itemmousedown',
		'itemmousemove',
		'itemmouseout',
		'itemmouseover',
		'itemmouseup',
		'itemtap',
		'redraw',
		'refresh',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap',
		'storechange'
];
}
@Component({
  selector: 'ext-' + extspacefillingMetaData.XTYPE,
	inputs: extspacefillingMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extspacefillingMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extspacefilling)}],
	template: '<template #dynamic></template>'
})
export class extspacefilling extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extspacefillingMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
