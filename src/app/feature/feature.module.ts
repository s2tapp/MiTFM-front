import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureComponent],
  providers: [],
  exports: [FeatureComponent]
})
export class FeatureModule { }
