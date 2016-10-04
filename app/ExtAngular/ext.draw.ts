import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extdrawMetaData {
	public static XTYPE: string = 'draw';
	public static INPUTNAMES: string[] = [
		'engine',
		'gradients',
		'resizeHandler',
		'sprites'
];
	public static OUTPUTS: any[] = [
		{name:'bodyresize',parameters:'size'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'}
];
	public static OUTPUTNAMES: string[] = [
		'bodyresize',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap'
];
}
@Component({
  selector: 'ext-' + extdrawMetaData.XTYPE,
	inputs: extdrawMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extdrawMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extdraw)}],
	template: '<template #dynamic></template>'
})
export class extdraw extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extdrawMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
