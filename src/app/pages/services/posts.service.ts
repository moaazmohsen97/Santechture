import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = environment?.apiUrl;

  constructor(private http: HttpClient) {}

  getPostsList(start: any, limit: any): Observable<any> {
    let params: any = {}
    if (start) {
      params._start = start
    }
    if (limit) {
      params._limit = limit
    }
    return this.http.get<any>(this.apiUrl+'/posts', {params});
  }

  updatePost(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${data.id}`,data);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  getCommentsList(id: any): Observable<any> {
    let params: any = {}
    if (id) {
      params.postId = id
    }
    return this.http.get<any>(this.apiUrl+'/comments', {params});
  }
}
