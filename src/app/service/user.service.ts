import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users'

  constructor(private httpClient: HttpClient) { }

  getUsers() :Observable<User[]>{
    return this.httpClient.get(this.url) as Observable<User[]>
  }

  createUsers(user: User[]) :Observable<User[]>{
    return this.httpClient.post(this.url, user) as Observable<User[]>
  }
}
