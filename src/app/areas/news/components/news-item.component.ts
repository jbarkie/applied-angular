import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NewsArticle } from '../types';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>{{ headerText() }}</p>
    @let article = articleToDisplay();
    <article class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{{ article.title }}</h2>
        <p>{{ article.shortDescription }}</p>
        <p>
          <small>{{ article.datePublished }}</small>
        </p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" [href]="article.link" target="_blank">{{
            article.linkSlug
          }}</a>
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class NewsItemComponent {
  articleToDisplay = input.required<NewsArticle>();
  headerText = input('Default header');
}