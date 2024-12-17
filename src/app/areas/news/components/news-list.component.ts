import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  resource,
} from '@angular/core';
import { NewsArticle } from '../types';
import { NewsItemComponent } from './news-item.component';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemComponent],
  template: `
    @if (readArticleCount() !== 0) {
      <div>
        <p>You've read {{ readArticleCount() }} articles!</p>
      </div>
    } @else {
      <p>Read some stuff!</p>
    }
    <section>
      @if (articles.isLoading()) {
        <span class="loading loading-spinner text-primary"></span>
      } @else {
        @for (article of articles.value(); track article.id) {
          <app-news-item
            (linkRead)="readTheArticle($event)"
            [articleToDisplay]="article"
            [headerText]="preferredHeader()"
          />
        } @empty {
          <p>No news! Check back later.</p>
        }
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  preferredHeader = signal('Preferred header');
  articles = resource<NewsArticle[], unknown>({
    loader: () =>
      fetch('http://fake-news.some-fake-server.com/news-feed').then((r) =>
        r.json(),
      ),
  });

  readArticles = signal<NewsArticle[]>([]);
  readArticleCount = computed(() => this.readArticles().length);
  readTheArticle(article: NewsArticle) {
    this.readArticles.update((a) => [article, ...a]);
  }
}
