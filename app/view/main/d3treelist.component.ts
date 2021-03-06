import { Component } from '@angular/core';
import { StocksStore } from '../../store/stocks.store';

@Component({
	styles:  [``],
  selector: '',
	template: `<ext-d3-treemap [config]='d3Config' fit=true></ext-d3-treemap>`
})
export class D3TreeListComponent { 
	private d3Config: any = {};

	constructor () {
		this.d3Config = {
			store: new StocksStore().extjsObject,
			rootVisible: false,
			nodeValue: function (node) {
					return node.data.cap;
			},
			colorAxis: {
					scale: {
							type: 'linear',
							domain: [-5, 0, 5],
							range: ['#E45649', '#ECECEC', '#50A14F']
					},
					field: 'change',
					processor: function (axis, scale, node, field) {
							return node.isLeaf() ? scale(node.data[field]) : '#ececec';
					}
			}
		}
	}
}
