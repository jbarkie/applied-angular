import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { PostApiResponse } from '../types';

export class PostApi {
  #http = inject(HttpClient);
  getPosts() {
    return this.#http.get<PostApiResponse>('/api/posts');
  }
}
