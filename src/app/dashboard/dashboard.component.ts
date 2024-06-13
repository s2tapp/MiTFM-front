import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { PeticionService, TranscriptionResponse } from '../shared/peticion/peticion.service';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { EditorModule } from 'primeng/editor';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UploadEvent {
  originalEvent: HttpEvent<any>;
  files: File[];
}

interface Technology {
  key: string,
  name: string;
}

@Component({
  selector: 'miTFM-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FileUploadModule, ToastModule, EditorModule, RadioButtonModule,
    ProgressSpinnerModule, CommonModule, FormsModule],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  technologies: Technology[] | undefined;

  newForm!: FormGroup;

  uploading: boolean = false;
  uploadedFileName!: string;
  uploadedFileSize!: number;
  audioURL!: string;

  processing: boolean = false;

  constructor(private messageService: MessageService,
    private peticionService: PeticionService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.technologies = [{key: "tech1", name: "Whisper"}, {key: "tech2", name: "Wav2vec"}];
    this.newForm = this.fb.group({
      selectedFile: [null, Validators.required],
      selectedTech: [this.technologies[0].name, Validators.required],
      transcriptionText: ["Suba un archivo de audio y presiona procesar para obtener la transcripción.<br/>Para más información, puede consultar en la documentación.", null]
    });
  }

  onProgessUpload(event: any) {    
    this.uploading = true;
  }

  onBasicUploadAuto(event: UploadEvent) {
    const file = event.files[0];
    
    this.uploadedFileName = file.name;
    this.uploadedFileSize = file.size;
    this.audioURL = URL.createObjectURL(file);    
    
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Se ha subido correctamente el archivo' });
    this.newForm.patchValue ({
      selectedFile: file
    })
      
    this.uploading = false;
  }

  onSubmit(): void {
    if (this.newForm.valid) {
      this.processing = true;
      const formValues = this.newForm.value;
      const selectedFile = formValues.selectedFile;
      const technology = formValues.selectedTech;
      this.peticionService.createTranscription(technology, selectedFile).subscribe(
      (response: TranscriptionResponse) => {
        console.log('Transcription created successfully', response);
        this.newForm.patchValue ({
          transcriptionText: response.text + "<br/><br/>Tiempo requerido: " + response.time +" segundos - Confianza: " +  (response.confidence * 100) +" %"
        });
        this.processing = false;
      });
   } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'la tecnología y el archivo se deben introducir' });
   } 
  }
}