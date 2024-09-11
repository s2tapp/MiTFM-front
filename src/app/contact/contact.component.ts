import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'gino.uva.2023.2024@gmail.com';
  responsable: string = 'ECA-SIMM';
}
