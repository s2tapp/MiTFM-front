import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    { 
        path: 'contact', 
        component: ContactComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ]
})
export class ContactRoutingModule { }
