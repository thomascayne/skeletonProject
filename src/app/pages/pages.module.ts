import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	imports: [
		LayoutModule,
		PagesRoutingModule,
		SharedModule
	],
	declarations: [
		HomeComponent,
	],
	exports: [
		HomeComponent
	]
})

export class PagesModule {

}
