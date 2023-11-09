import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitHubUserService {
  private apiUrl = 'https://api.example.com/data/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUserData(userName: string): Observable<any> {
    const apiUrl = `https://api.github.com/users/${userName}`;
    return this.http.get(apiUrl);
  }
}
