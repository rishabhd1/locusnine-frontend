import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUser } from '../models/PostUser';
// import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`/api/user`);
  }

  postUser(payload: PostUser): Observable<any> {
    return this.http.post<any>(`/api/user`, payload);
  }

  updateUser(id: string, payload: PostUser): Observable<any> {
    console.log(`ID: ${id}`);
    return this.http.put<any>(`/api/user/${id}`, payload);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`/api/user/${id}`);
  }
}
