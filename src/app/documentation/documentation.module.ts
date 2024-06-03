import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';  
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentationRoutingModule
  ],
  declarations: [DocumentationComponent],
  providers: [],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
