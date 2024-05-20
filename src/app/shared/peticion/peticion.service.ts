import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Peticion } from './peticion.model';
import { environment } from '../../../environments/environment';

export interface TranscriptionResponse {
  text: string;
}

@Injectable()
export class PeticionService {

  // habria que poner la url de springboot
  private url_peticiones: string = "http://localhost:8080/api/peticiones";
  private url_transcripcion = 'http://localhost:8080/api/transcription';

  constructor(private httpClient: HttpClient) { }

  getPeticiones(): Observable<Peticion[]> {
    let peticiones: Peticion[] = [];

    return this.httpClient.get(this.url_peticiones).pipe(
      map((dbPeticionList: any) => {
        for (let i in dbPeticionList) {
          let url_peticion =  environment.url +'/twimp/' + dbPeticionList[i].id;
          let peticion: Peticion = new Peticion(dbPeticionList[i].id, url_peticion, 
            dbPeticionList[i].estado, dbPeticionList[i].resultado, dbPeticionList[i].transcripcion, dbPeticionList[i].tiempoProceso,
            dbPeticionList[i]._fecha);
          peticiones.push(peticion);
        }
        return peticiones;
      }),
      catchError(this.handleError)
    );
  }

  createTranscription(technology: string, file: File): Observable<TranscriptionResponse> {
    const formData: FormData = new FormData();
    formData.append("technology", technology);
    formData.append("file", file);
    return this.httpClient.post<TranscriptionResponse>(this.url_transcripcion, formData).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(() => errMsg);
  }
}
