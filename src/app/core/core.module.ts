// This file CAN be modified.
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';

// This function ensures that the CoreModule is only imported once.
import { checkCoreModule } from './core-module-import.guard';

// Import ALL global services below.
import { DataService } from './data/data.service';

import { UserService } from './user/user.service';

@NgModule({

	// List the global services here.
	providers: [
		DataService,
		Title,
		UserService
	]
})

export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		checkCoreModule(parentModule, 'CoreModule');
	}
}
