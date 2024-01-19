import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { diagnoType } from '../model/diagnoType';

@Injectable({
  providedIn: 'root'
})
export class DiagnoService {

  constructor(private http:HttpClient) {

   }
  getAllDiagno():Observable<any>{
    //return this.http.get("http://localhost:8080/test/all")
    return this.http.get("http://localhost:3000/diagnoTypes")
  }
  addDiagno(d:diagnoType):Observable<Object>{
    return this.http.post("http://localhost:3000/diagnoTypes",d)
  }
}