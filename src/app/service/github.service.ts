import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepositoriesForks(repository: string, page: number, perPage: number): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      //Authorization: "Bearer ",
    });
    const url = `https://api.github.com/repos/${repository}/forks?page=${page}&per_page=${perPage}`
    return this.http.get<any[]>(url, { headers: headers });
  }

  getRepository(repository: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      //Authorization: "Bearer ",
    });
    const url = `https://api.github.com/repos/${repository}`
    return this.http.get<any>(url, { headers: headers });
  }
}