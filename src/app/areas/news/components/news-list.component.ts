import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

type NewArticle = {
  id: string;
  title: string;
  shortDescription: string;
  link: string;
  datePublished: string;
};

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <section>
      @for (article of articles(); track article.id) {
        <article class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ article.title }}</h2>
            <p>{{ article.shortDescription }}</p>
            <p>
              <small>{{ article.datePublished }}</small>
            </p>
            <div class="card-actions justify-end">
              <a class="btn btn-primary" href="">{{ article.link }}</a>
            </div>
          </div>
        </article>
      } @empty {
        <p>No news! Check back later.</p>
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  articles = signal<NewArticle[]>([
    {
      id: '1',
      title: 'Lunchtime',
      shortDescription: 'Time to eat',
      link: 'https://mylink',
      datePublished: '2024-12-16T17:32:12.556Z',
    },
  ]);
}
