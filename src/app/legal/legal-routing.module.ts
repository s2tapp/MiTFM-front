import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const legalRoutes: Routes = [
    { 
        path: 'termsConditions', 
        component: TermsConditionsComponent
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(legalRoutes)
    ]
})
export class LegalRoutingModule { }
