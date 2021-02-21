import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  setGroup(data: any) {
    return this.http.post<any>("https://elige-server.herokuapp.com/api/groups/", data, {});
  }

  getGroups() {
    return this.http.get<any>("https://elige-server.herokuapp.com/api/groups/");
  }

}
