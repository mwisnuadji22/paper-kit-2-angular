import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'app/shared/fetch-api/model/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/api/';
  isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  login(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}user`);
  }

  stateLogin(value: boolean) {
    this.isLoggedIn.next(value);
  }

  getStateLogin(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
