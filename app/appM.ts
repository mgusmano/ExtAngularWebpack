import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import * as _ from 'lodash';


import { AgencyService }  from './service/agency.service';

import { MainMComponent } from './view/main/mainm.component';
import { MainEComponent } from './view/main/maine.component';
import { OutletComponent } from './view/main/outlet.component';

import { HeaderComponent } from './view/main/header.component';
import { SideBarComponent } from './view/main/sidebar.component';
import { WelcomeComponent } from './view/main/welcome.component';
import { MenuComponent } from './view/main/menu.component';
import { ActionsComponent } from './view/main/actions.component';
import { DetailComponent } from './view/main/detail.component';
import { FooterComponent } from './view/main/footer.component';

import { DialogClientComponent } from './view/dialog/dialogclient.component';
import { DialogComponent } from './view/dialog/dialog.component';
import { DialogAnchorDirective } from './view/dialog/dialoganchor.directive';
import { ExtAngularComponent } from './view/extangular/extangular.component';
import { ItemsClientComponent } from './view/items/itemsclient.component';
import { SimpleComponent } from './view/items/simple.component';
import { ContentChildrenComponent } from './view/main/contentchildren.component';

import { TabsComponent } from './view/tabs/tabs.component';
import { TabComponent } from './view/tabs/tab.component';
import { TabsClientComponent } from './view/tabs/tabsclient.component';

import { IntroComponent } from './view/intro/intro.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AgenciesComponent } from './view/agencies/agencies.component';
import { SpendingDetailComponent } from './view/spendingdetail/spendingdetail.component';
import { ChartComponent } from './view/main/chart.component';
import { ReportsComponent } from './view/reports/reports.component';
import { CandidateCalendarsComponent } from './view/candidatecalendars/candidatecalendars.component';


import { ConfiguratorComponent } from './view/main/configurator.component';
import { AnalyzeComponent } from './view/analyze/analyze.component';

import { D3TreeListComponent } from './view/main/d3treelist.component';

import { WidgetGridComponent } from './view/main/widgetgrid.component';

import { InheritClientComponent } from './view/inherit/inheritclient.component';
import { ExtBase } from './view/inherit/ext.base';
import { Ext } from './view/inherit/ext';
import { ExtGrid2 } from './view/inherit/ext.grid';
import { ExtCartesian2 } from './view/inherit/ext.cartesian';
import { ExtNgComponent2 } from './view/inherit/ext.ngcomponent';

import { DynamicClientComponent } from './view/dynamic/dynamicclient.component';
import { DynamicModule }    from './view/dynamic/dynamic.module';

import { SimpleGridComponent }    from './view/simplegrid/simplegrid.component';

import { ExtModule } from './ExtAngular/ext.module';


//import {provideComponentOutletModule} from './extangular/provider';
//import {ComponentOutlet} from './extangular/component-outlet';
//export * from './extangular/component-outlet';
//export {provideComponentOutletModule} from './extangular/provider';

const appRoutes: Routes = [
//const appRoutes: any = [
  // new AsyncRoute({
  //   path: '/about',
  //   loader: () => System.import('./components/about/about').then(m => m.About),
  //   name: 'about'
  // })

	//{ text: '', path: '', redirectTo: '/dashboard', pathMatch: 'full' },

	{ path: 'itemsclient', component: ItemsClientComponent },
	{ path: 'contentchildren', component: ContentChildrenComponent },
	{ path: 'tabsclient', component: TabsClientComponent },

	{ path: 'dialogclient', component: DialogClientComponent },
	{ path: 'extangular', component: ExtAngularComponent },
	{ path: 'intro', component: IntroComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'spendingdetail', component: SpendingDetailComponent },
	{ path: 'chart', component: ChartComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'candidatecalendars', component: CandidateCalendarsComponent },


	{ path: 'configurator', component: ConfiguratorComponent },
	{ path: 'analyze', component: AnalyzeComponent },

	{ path: 'd3treelist', component: D3TreeListComponent },

	{ path: 'widgetgrid', component: WidgetGridComponent },
	{ path: 'inheritclient', component: InheritClientComponent },
	{ path: 'dynamicclient', component: DynamicClientComponent },
	{ path: 'simplegrid', component: SimpleGridComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	
	imports: [
		BrowserModule,
		ExtModule,
		DynamicModule.forRoot(),
		routing
	],
	exports: [
		TabsClientComponent
	],
	declarations: [
		OutletComponent,
		MainEComponent,
		MainMComponent,
		HeaderComponent,
		SideBarComponent,
		WelcomeComponent,
		MenuComponent,
		ActionsComponent,
		DetailComponent,
		FooterComponent,

		DialogClientComponent, DialogComponent, DialogAnchorDirective,
		ExtAngularComponent,
		ItemsClientComponent,
		SimpleComponent,
		ContentChildrenComponent,
		TabsClientComponent, TabsComponent, TabComponent,
		IntroComponent,
		DashboardComponent,
		AgenciesComponent,
		SpendingDetailComponent,
		ChartComponent,
		ReportsComponent,
		CandidateCalendarsComponent,

		ConfiguratorComponent,
		AnalyzeComponent,

		D3TreeListComponent,

		WidgetGridComponent,

		InheritClientComponent,
		ExtBase,
		Ext,
		ExtGrid2,
		ExtCartesian2,
		ExtNgComponent2,

		DynamicClientComponent,

		SimpleGridComponent,

		//ComponentOutlet

		],
	providers: [
		TabsClientComponent,
		COMPILER_PROVIDERS,
		AgencyService
		// provideComponentOutletModule({
    //   imports: [CommonModule]
    // })
	],
	entryComponents: [TabsClientComponent, InheritClientComponent, SimpleComponent, WelcomeComponent, MenuComponent, ActionsComponent, SideBarComponent, FooterComponent, ChartComponent, TabsComponent, DialogComponent, OutletComponent],
	bootstrap: [ MainMComponent ]
	//bootstrap: [ MainEComponent ]
})
export class AppModuleM { }

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModuleM);
