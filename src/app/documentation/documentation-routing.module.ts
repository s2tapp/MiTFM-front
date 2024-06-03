import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentationComponent } from './documentation.component';

const documentationRoutes: Routes = [
    { 
        path: 'documentation', 
        component: DocumentationComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(documentationRoutes)
    ]
})
export class DocumentationRoutingModule { }
