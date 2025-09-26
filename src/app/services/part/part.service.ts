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

  private partsSubject = new BehaviorSubject<partDto[]>([]);
  public parts$ = this.partsSubject.asObservable();

  constructor(private http: HttpClient) { }

  save(partData: partDto): void {
    let saveObs: Observable<void>;

    if (partData.partType === partTypeEnum.Basic) {
      saveObs = this.http.post<void>(this.apiUrlBasic, partData);
    } else if (partData.partType === partTypeEnum.FanBlade) {
      saveObs = this.http.post<void>(this.apiUrlFanBlades, partData);
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
    this.http.get<partDto[]>(this.getRoutes).subscribe({
      next: (data) => {
      this.partsSubject.next(data);
      console.log(data);
      },
      error: (err) => console.error(err)
      });
  }
}