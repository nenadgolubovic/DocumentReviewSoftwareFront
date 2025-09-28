import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { documentDto } from '../../models/documentDto';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private postApi = 'http://localhost:8080/document/upload';   
  private getAllApi = 'http://localhost:8080/document/get/part';   

  constructor(private http: HttpClient) { }

   upload(data:any,selectedFile:File) {
    
      const formData = new FormData();
      formData.append('partId', data.id.toString()); 
      formData.append('document', selectedFile); 
    
      this.http.post(this.postApi, formData,{ withCredentials: true }).subscribe();

     
    }
    
    getDocument(filename: string): Observable<Blob> {
      return this.http.get(`http://localhost:8080/document/${filename}`, {
        responseType: 'blob', withCredentials: true 
      });
    }

    getById(id:number): Observable<documentDto[]> {
        return this.http.get<documentDto[]>(`${this.getAllApi}/${id}`,{ withCredentials: true });
  }
}
