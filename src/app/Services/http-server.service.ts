import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_RANDOM_USER_SERVER = 'https://randomuser.me/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getRandomUsers(numberUser: number = 1) {
    const url = `${this.REST_RANDOM_USER_SERVER}/?results=` + numberUser;

    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postComment(payload: any) {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post(url, payload, this.httpOptions);
  }
}
