import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private postApi = 'http://localhost:8080/document/upload';   

  constructor(private http: HttpClient) { }

   upload(data:any,selectedFile:File) {
    
      const formData = new FormData();
      formData.append('partId', data.id.toString()); 
      formData.append('document', selectedFile); 
    
      this.http.post(this.postApi, formData).subscribe();
    }
}
