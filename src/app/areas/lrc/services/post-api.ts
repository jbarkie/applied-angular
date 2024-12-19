import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  PostApiResponse,
  PostApiResponseItem,
  PostCreateModel,
} from '../types';

export class PostApi {
  #http = inject(HttpClient);
  getPosts() {
    return this.#http.get<PostApiResponse>('/api/posts');
  }

  addPost(post: PostCreateModel) {
    return this.#http.post<PostApiResponseItem>('/api/posts', post);
  }
}
