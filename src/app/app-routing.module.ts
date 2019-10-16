/* This file should NOT be modified.
Use a feature module's *-routing.module.ts file to modify routes specific for that feature. */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true
		})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}
