import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { partDto, partTypeEnum } from '../../models/partDto';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private apiUrlBasic = 'http://localhost:8080/part/basic/save'; 
  private apiUrlFanBlades = 'http://localhost:8080/part/fanBlades/save'; 
  private getRoutes = 'http://localhost:8080/part/all';   
  private deleteRoute = 'http://localhost:8080/part/'; 


  contentVisible = false;
  currentPartId = -1;
  private partsSubject = new BehaviorSubject<partDto[]>([]);
  public parts$ = this.partsSubject.asObservable();

  constructor(private http: HttpClient) { }

  save(partData: partDto): void {
    let saveObs: Observable<void>;

    if (partData.type === partTypeEnum.Basic) {
      saveObs = this.http.post<void>(this.apiUrlBasic, partData,{ withCredentials: true });
    } else if (partData.type === partTypeEnum.FanBlade) {
      saveObs = this.http.post<void>(this.apiUrlFanBlades, partData,{ withCredentials: true });
    } else {
      throw new Error('Unknown part type');
    }

    saveObs.subscribe({
      next: () => {
        this.getAll();
      },
      error: (err) => console.error(err)
    });
  }
  getAll(): void {
    this.http.get<partDto[]>(this.getRoutes,{ withCredentials: true }).subscribe({
      next: (data) => {
      this.partsSubject.next(data);
      },
      error: (err) => {
          if (err.status === 400) {
            this.partsSubject.next([]);
          }
          console.error(err);
        }
      });
  }

    delete(id: number): void {
     this.http.delete<string>(`${this.deleteRoute}${id}`, { responseType: 'text' as 'json' , withCredentials: true })
       .subscribe({
         next: (res) => {
           this.getAll();
         },
         error: (err) => console.error(err)
       });
    }
}