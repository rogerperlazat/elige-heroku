import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotersService {

  constructor(private http: HttpClient) { }

  getVoter(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/voters/getVoterById", data, {});
  }

  getVoterById(id: string) {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/voters/"+id);
  }

  updateVoterById(id: string, data: any) {
    return this.http.put<any>("https://elige-server.herokuapp.com/api/voters/"+id, data);
  }

  getVotes(){
    return this.http.get<any>("https://elige-server.herokuapp.com/api/votes/");
  }

  getCorporationCandidate(idCandidate){
    return this.http.get<any>("https://elige-server.herokuapp.com/api/votes/votes-by-candidate/"+idCandidate);
  }

}
