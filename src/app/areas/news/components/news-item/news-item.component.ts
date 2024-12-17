import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { NewsArticle } from '../../types';
import { RelativeTimeComponent } from '../../shared/relative-time.component';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RelativeTimeComponent],
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
          <small
            >This article was posted
            <app-news-item-relative-time [date]="article.datePublished" />
          </small>
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

  linkRead = output<NewsArticle>();
}
