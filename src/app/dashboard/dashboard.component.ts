import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { PeticionService, TranscriptionResponse } from '../shared/peticion/peticion.service';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';


import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UploadEvent {
  originalEvent: HttpEvent<any>;
  files: File[];
}

interface Technology {
  name: string;
}

@Component({
  selector: 'miTFM-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FileUploadModule, ToastModule, InputTextareaModule, DropdownModule, CardModule],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  technologies: Technology[] | undefined;

  transcriptionText!: string;

  newForm!: FormGroup;

  constructor(private messageService: MessageService,
    private peticionService: PeticionService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.technologies = [{name: "whisper"}, {name: "wav2vec"}];
    this.newForm = this.fb.group({
      selectedFile: [null, Validators.required],
      selectedTech: ['', Validators.required]
    });
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Se ha subido correctamente el archivo' });
    this.newForm.patchValue ({
      selectedFile: event.files[0]
    });
  }

  onSubmit(): void {
    if (this.newForm.valid) {
      const formValues = this.newForm.value;
      const selectedFile = formValues.selectedFile;
      const technology = formValues.selectedTech;
      this.peticionService.createTranscription(technology.name, selectedFile).subscribe(
        (response: TranscriptionResponse) => {
          console.log('Transcription created successfully', response);
          this.transcriptionText = response.text;
        });
   } else {
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'la tecnología y el archivo se deben introducir' });
   } 
  }
}