import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
	//styleUrls: ['./header.component.css'],
	styles:[require('./header.component.css').toString()],
	selector: 'header',
	templateUrl: 'header.component.html'
})
export class HeaderComponent { 
	private thePivotGrid: any;
	private objArray:any = [
		{name: 'All Agencies'}, 
		{name: 'Department of Agriculture'}, 
		{name: 'Department of Commerce'}, 
		{name: 'Department of the Interior'}, 
		{name: 'Department of Defense'},
		{name: 'Department of Homeland Security'},
	];

	constructor(private agencyService: AgencyService) {}

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}

	onSelect(value) {
		if (value == 'All Agencies') {
			this.agencyService.getAgencyPortfolioStore().filter('agencyName','');
//			this.thePivotGrid.extjsObject.getStore().filter('agencyName','');
		} else {
			this.agencyService.getAgencyPortfolioStore().filter('agencyName',value);
//			this.thePivotGrid.extjsObject.getStore().filter('agencyName',value);
		}
	}


}
