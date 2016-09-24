import {ExtJSClass} from '../extangular/extjs.class';

export class CandidateCalendarStore extends ExtJSClass {
	constructor (createConfig?: any) {
		let className: any = 'CandidateCalendarStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad: true,
			proxy: { type: 'memory' },
			data: [
				{ id: 2, title: 'Donald', eventStore: { proxy: { type: 'ajax', url: 'resources/app/calendars/DonaldTrump.json' } } },
				{ id: 3, title: 'Hillary', eventStore: { proxy: { type: 'ajax', url: 'resources/app/calendars/HillaryClinton.json' } } }
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}