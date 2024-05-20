import { Component, Input } from '@angular/core';

import { Peticion } from '../peticion.model';

@Component({
  selector: 'miTFM-peticion-card',
  templateUrl: './peticion-card.component.html',
  styleUrls: ['./peticion-card.component.css']
})
export class PeticionCardComponent {
  @Input() peticion!: Peticion;

  constructor() { }

}
