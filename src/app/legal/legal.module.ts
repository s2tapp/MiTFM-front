import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LegalRoutingModule } from './legal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LegalRoutingModule
  ],
  declarations: [PrivacyPolicyComponent, TermsConditionsComponent],
  providers: [],
  exports: [PrivacyPolicyComponent, TermsConditionsComponent]
})
export class LegalModule { }
