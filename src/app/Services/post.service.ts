import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postModel } from '../models/postModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  GetAllPosts(): Observable<postModel[]> {
    return this.http.get<postModel[]>(
      'http://localhost:5080/api/Post/GetAllPosts'
    );
  }
}
