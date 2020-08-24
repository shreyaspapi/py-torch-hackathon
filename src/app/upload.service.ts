import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  SERVER_URL: string = 'https://corona-api-india.herokuapp.com/recognition';
  constructor(private httpClient: HttpClient) {}

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
