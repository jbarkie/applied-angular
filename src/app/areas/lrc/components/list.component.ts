import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostApi } from '../services/post-api';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, JsonPipe],
  template: ` <p>list of posts</p>
    <pre>{{ posts$ | async | json }}</pre>`,
  styles: ``,
})
export class ListComponent {
  api = inject(PostApi);

  posts$ = this.api.getPosts();
}
