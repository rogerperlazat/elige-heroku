import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {


  constructor(private http: HttpClient) { }

  setCandidate(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/candidates/", data, {});
  }

  getCandidates() {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/candidates/");
  }

  getCandidatesCorporation(id: string) {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/candidates/corporation/"+id);
  }
}
