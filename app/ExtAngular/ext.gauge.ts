import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extgaugeMetaData {
	public static XTYPE: string = 'gauge';
	public static INPUTNAMES: string[] = [
		'angleOffset',
		'animation',
		'clockwise',
		'maxValue',
		'minValue',
		'padding',
		'textAlign',
		'textTpl',
		'trackLength',
		'trackStart',
		'trackStyle',
		'value',
		'valueStyle'
];
	public static OUTPUTS: any[] = [

];
	public static OUTPUTNAMES: string[] = [

];
}
@Component({
  selector: 'ext-' + extgaugeMetaData.XTYPE,
	inputs: extgaugeMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extgaugeMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extgauge)}],
	template: '<template #dynamic></template>'
})
export class extgauge extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extgaugeMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
