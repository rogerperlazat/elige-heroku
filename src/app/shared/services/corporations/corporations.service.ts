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
}
