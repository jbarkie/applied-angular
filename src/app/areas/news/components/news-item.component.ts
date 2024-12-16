import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  effect,
} from '@angular/core';
import { NewsArticle } from '../types';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>{{ headerText() }}</p>
    @let article = articleToDisplay();
    <article class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 [title]="article.datePublished" class="card-title">
          {{ article.title }}
        </h2>
        <p>{{ article.shortDescription }}</p>
        <p>
          <small>This article was posted {{ relativeDate() }} ago.</small>
        </p>
        <div class="card-actions justify-end">
          <a
            (click)="linkRead.emit(article)"
            class="btn btn-primary"
            [href]="article.link"
            target="_blank"
            >{{ article.linkSlug }}</a
          >
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class NewsItemComponent {
  articleToDisplay = input.required<NewsArticle>();
  headerText = input('Default header');

  relativeDate = signal('...');
  linkRead = output<NewsArticle>();

  constructor() {
    effect(() => {
      // effect runs in the background
      // effects are "side effects" - not like "special effects"
      const intervalId = setInterval(() => {
        this.relativeDate.set(
          formatDistanceToNow(new Date(this.articleToDisplay().datePublished)),
        );
      }, 1000);
      return () => clearInterval(intervalId); // optional - code to run when component is removed from DOM
    });
  }
}
