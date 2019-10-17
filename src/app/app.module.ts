import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/* This file should NOT be modified.
Use ./core/core.module.ts to provide singleton services.
Use ./shared/shared.module.ts to declare and export directives, pipes, modules, and components used by other components.
Otherwise, use a feature module's component.ts file to apply specific presentation and logic for that feature. */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    PagesModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
