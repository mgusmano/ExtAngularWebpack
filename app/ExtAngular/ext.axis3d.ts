import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extaxis3dMetaData {
	public static XTYPE: string = 'axis3d';
	public static INPUTNAMES: string[] = [
		'adjustByMajorUnit',
		'background',
		'center',
		'chart',
		'depth',
		'fields',
		'floating',
		'grid',
		'hidden',
		'increment',
		'label',
		'labelInSpan',
		'layout',
		'length',
		'limits',
		'linkedTo',
		'listeners',
		'majorTickSteps',
		'margin',
		'maximum',
		'maxZoom',
		'minimum',
		'minorTickSteps',
		'minZoom',
		'needHighPrecision',
		'position',
		'radius',
		'reconcileRange',
		'renderer',
		'rotation',
		'segmenter',
		'style',
		'title',
		'titleMargin',
		'totalAngle',
		'visibleRange'
];
	public static OUTPUTS: any[] = [
		{name:'rangechange',parameters:'axis,range'},
		{name:'visiblerangechange',parameters:'axis,visibleRange'}
];
	public static OUTPUTNAMES: string[] = [
		'rangechange',
		'visiblerangechange'
];
}
@Component({
  selector: 'ext-' + extaxis3dMetaData.XTYPE,
	inputs: extaxis3dMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extaxis3dMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extaxis3d)}],
	template: '<template #dynamic></template>'
})
export class extaxis3d extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extaxis3dMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
