import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RelativeTimeComponent } from '../shared/relative-time.component';

@Component({
  selector: 'app-news-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RelativeTimeComponent],
  template: `
    <div>
      <h2>The News That's Fit To Print</h2>
      <p>You loaded this <app-news-item-relative-time [date]="now()" /></p>
    </div>
  `,
  styles: ``,
})
export class NewsHeaderComponent {
  now = signal(new Date().toISOString());
}
