import { HttpClient } from '@angular/common/http';
import { partDto, partTypeEnum } from '../../models/partDto';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private apiUrlBasic = 'http://localhost:8080/part/basic/save'; 
    private apiUrlFanBlades = 'http://localhost:8080/part/fanBlades/save'; 


  constructor(private http: HttpClient) { }

  save(partData: partDto): Observable<partDto> {
    if (partData.partType === partTypeEnum.Basic) {
      return this.http.post<partDto>(this.apiUrlBasic, partData);
    } else if (partData.partType === partTypeEnum.FanBlade) {
      return this.http.post<partDto>(this.apiUrlFanBlades, partData);
    } else {
      throw new Error('Unknown part type');
    }
}

  
}
