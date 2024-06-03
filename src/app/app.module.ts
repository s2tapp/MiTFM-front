import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LegalModule } from './legal/legal.module';
import { ContactModule } from './contact/contact.module';
import { FeatureModule } from './feature/feature.module'; 
import { DocumentationModule } from './documentation/documentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    LegalModule,
    ContactModule,
    FeatureModule,
    DocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
