import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interface/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interface/user/auth/AuthResponse';
import { SignupUserRequest } from 'src/app/models/interface/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interface/user/SignupUserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL=environment.API_URL;
  constructor(private readonly http:HttpClient) { }

  signupUser(requestDatas:SignupUserRequest):Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(`${this.API_URL}/user`, requestDatas);
  }
  authuser(requestDatas:AuthRequest):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }
}
