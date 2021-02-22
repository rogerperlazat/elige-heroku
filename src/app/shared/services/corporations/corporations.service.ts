import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorporationsService {
  constructor(private http: HttpClient) { }

  setCorporation(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/corporations/", data, {});
  }

  getCorporations() {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/corporations/");
  }

  getCorporationsGrades(grade: string) {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/corporations/get-grades-corporation/"+grade);
  }

  addGradesCorporation(data: any) {
    let grades: any = {}
    grades.idGrade = data.idGrade;
    return this.http.put<any>("https://elige-server.herokuapp.com/api/corporations/add-grades-corporation/"+data.idCorporation, data, {});
  }
}
