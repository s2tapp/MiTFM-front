import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PeticionService } from './peticion/peticion.service';

import { PeticionCardComponent } from './peticion/peticion-card/peticion-card.component';
import { PeticionListComponent } from './peticion/peticion-list/peticion-list.component';

import { SortByPipe } from './sort-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PeticionCardComponent, PeticionListComponent, SortByPipe],
  providers: [PeticionService],
  exports: [PeticionCardComponent, PeticionListComponent, RouterModule]
})
export class SharedModule { }
