import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) { }

  setGrade(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/grades/", data, {});
  }

  getGrades() {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/grades/");
  }

}
