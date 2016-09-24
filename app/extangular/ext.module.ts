import { NgModule } from "@angular/core";
import { Ext } from './ext';
import { ExtButton } from './ext.button';
import { ExtCartesian } from './ext.cartesian';
import { ExtContainer } from './ext.container';
import { ExtDataView } from './ext.dataview';
import { ExtGrid } from './ext.grid';
import { ExtList } from './ext.list';
import { ExtNgComponent } from './ext.ngcomponent';
import { ExtPivotGrid } from './ext.pivotgrid';
import { ExtPolar } from './ext.polar';
import { ExtToolbar } from './ext.toolbar';
import { ExtJS } from './extjs';
//import { ExtJSClass } from './extjs.class'

@NgModule({
	exports: [
		Ext,
		ExtButton,
		ExtCartesian,
		ExtContainer,
		ExtDataView,
		ExtGrid,
		ExtList,
		ExtNgComponent,
		ExtPivotGrid,
		ExtPolar,
		ExtToolbar,
		ExtJS,
//		ExtJSClass
	],
	declarations: [
		Ext,
		ExtButton,
		ExtCartesian,
		ExtContainer,
		ExtDataView,
		ExtGrid,
		ExtList,
		ExtNgComponent,
		ExtPivotGrid,
		ExtPolar,
		ExtToolbar,
		ExtJS,
//		ExtJSClass
	]
})
export class ExtModule { }