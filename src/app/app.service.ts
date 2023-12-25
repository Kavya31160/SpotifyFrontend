import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './registration/user';
import {tap,catchError,map} from 'rxjs/operators';
import { Login } from './login/login';
import { Recommendation } from './music/Recommendation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:8081/user/user/v1/saveUser"
  constructor(private httpClient:HttpClient) { 
    
  }
  //observable can deliver multiple values of anytype-messages or events(in http modules we use (http client calls ))
  //Assynchronus calls 
  addUser(user:User): Observable<User>{
    const url=this.baseUrl;
    return this.httpClient.post<User>(url,user);    
  }
 
    loginUser(login:Login):Observable<Login>{
      const url="http://localhost:8082/auth/login";
      return this.httpClient.post<User>(url,login);  
  }
//music service
 getMusic():Observable<Recommendation[]>{
  
  let Token=   localStorage.getItem("token");
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${Token}`
  });
  
  const url="http://localhost:8083/music/api/v1/allTracks ";
  return this.httpClient.get<Recommendation[]>(url,{headers});  

  }
}

