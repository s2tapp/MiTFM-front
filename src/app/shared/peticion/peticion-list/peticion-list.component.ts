import { Component, Input } from '@angular/core';

import { Peticion } from '../peticion.model';

@Component({
  selector: 'miTFM-peticion-list',
  templateUrl: './peticion-list.component.html',
  styleUrls: ['./peticion-list.component.css']
})
export class PeticionListComponent {
  @Input() peticiones!: Peticion[];
}
