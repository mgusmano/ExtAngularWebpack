import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class extcalendarMetaData {
	public static XTYPE: string = 'calendar';
	public static INPUTNAMES: string[] = [
		'calendarList',
		'calendarList',
		'compact',
		'compactOptions',
		'createButtonPosition',
		'dateTitle',
		'defaultView',
		'nextButton',
		'nextButton',
		'sideBar',
		'store',
		'switcher',
		'switcherPosition',
		'timezoneOffset',
		'titleBar',
		'todayButton',
		'value',
		'views'
];
	public static OUTPUTS: any[] = [

];
	public static OUTPUTNAMES: string[] = [

];
}
@Component({
  selector: 'ext-' + extcalendarMetaData.XTYPE,
	inputs: extcalendarMetaData.INPUTNAMES.concat('config').concat('nofit'),
	outputs: extcalendarMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar)}],
	template: '<template #dynamic></template>'
})
export class extcalendar extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendarMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef);}
}
