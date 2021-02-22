import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  setVoter(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/voters/", data, {});
  }

  getVoter() {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/voters/");
  }

  setVote(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/votes/", data, {});
  }

  getStatusVote(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/votes/votes-by-voter/", data, {});
  }

}
