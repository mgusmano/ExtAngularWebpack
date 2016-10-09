import {extclass} from 'angular2-extjs';

export class AgencySummaryStore extends extclass {
	constructor (createConfig: any) {
		let className: any = 'AgencySummaryStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad:   true,
			proxy: {
				type: 'ajax',
				reader: {
					type: 'json',
					implicitIncludes: false
				},
				url: 'resource/app/data/AgencySummary.json'
			},
			fields: [
				{name: 'agencyName'},
				{name: 'agencyCode'}
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}