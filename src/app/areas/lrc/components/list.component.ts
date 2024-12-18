import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostsStore } from '../services/post-store';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <p>list of posts</p>
    @for (post of store.posts(); track post.id) {
      <div>
        <p>Name: {{ post.name }}</p>
        <p>Description: {{ post.description }}</p>
        <p>Posted By: {{ post.postedBy }}</p>
        <p>Posted On: {{ post.datePosted | date: 'medium' }}</p>
        <p>Link: {{ post.link }}</p>
      </div>
    }
  `,
  styles: ``,
})
export class ListComponent {
  store = inject(PostsStore);
}
