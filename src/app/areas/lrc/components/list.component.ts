import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: ` <p>list of posts</p>
    <pre>{{ posts.value() | json }}</pre>`,
  styles: ``,
})
export class ListComponent {
  posts = resource({
    loader: () => fetch('api/posts').then((p) => p.json()),
  });
}
