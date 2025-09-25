import { HttpClient } from '@angular/common/http';
import { partDto, partTypeEnum } from '../../models/partDto';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private apiUrlBasic = 'http://localhost:8080/part/basic/save'; 
    private apiUrlFanBlades = 'http://localhost:8080/part/fanBlades/save'; 


  constructor(private http: HttpClient) { }

  Save(partData:partDto){
        if(partData.partType == partTypeEnum.Basic){
          this.http.post<partDto>(this.apiUrlBasic, partData).subscribe();
        }
        if(partData.partType==partTypeEnum.FanBlade){
          this.http.post<partDto>(this.apiUrlFanBlades, partData).subscribe();
        }
  }
}
