import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testType } from '../model/testType';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) {

   }
  getAllTest():Observable<any>{
    //return this.http.get("http://localhost:8080/test/all")
    return this.http.get("http://localhost:3000/testTypes")
  }
  addTest(t:testType):Observable<Object>{
    return this.http.post("http://localhost:3000/testTypes",t)
  }
}