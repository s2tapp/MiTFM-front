import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent } from './feature.component';

const featureRoutes: Routes = [
    { 
        path: 'feature', 
        component: FeatureComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(featureRoutes)
    ]
})
export class FeatureRoutingModule { }
