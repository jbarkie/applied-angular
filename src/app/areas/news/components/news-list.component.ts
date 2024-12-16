import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NewsArticle } from '../types';
import { NewsItemComponent } from './news-item.component';

@Component({
  selector: 'app-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemComponent],
  template: `
    <section>
      @for (article of articles(); track article.id) {
        <app-news-item
          [articleToDisplay]="article"
          [headerText]="preferredHeader()"
        />
      } @empty {
        <p>No news! Check back later.</p>
      }
    </section>
  `,
  styles: ``,
})
export class NewsListComponent {
  preferredHeader = signal('Preferred header');
  articles = signal<NewsArticle[]>([
    {
      id: '1',
      title: 'Angular Inputs and Outputs',
      shortDescription:
        'Read about Angular inputs and outputs in "modern" Angular',
      link: 'https://applied-angular.hypertheory.com/guides/components.html',
      datePublished: '2024-12-16T17:32:12.556Z',
      linkSlug: 'Read about Angular Inputs & Outputs',
    },
    {
      id: '2',
      title: 'Creating an Angular Application',
      shortDescription: 'Learn how to create a super rad Angular app!',
      link: 'https://applied-angular.hypertheory.com/guides/angular-setup.html',
      datePublished: '2024-12-05T13:18:12.556Z',
      linkSlug: 'Read about creating Angular apps',
    },
    {
      id: '3',
      title: 'Deborah Kurata YouTube',
      shortDescription:
        'Youtube Videos about Angular Signals and stuff from Deborah Kurata',
      link: 'https://www.youtube.com/@deborah_kurata/videos',
      datePublished: '2024-11-10T10:15:12.556Z',
      linkSlug: 'Read about Angular Signals',
    },
  ]);
}
