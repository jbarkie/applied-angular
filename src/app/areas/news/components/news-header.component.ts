import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RelativeTimeComponent } from '../../../shared/components/relative-time.component';

@Component({
  selector: 'app-news-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RelativeTimeComponent],
  template: `
    <div>
      <h2>The News That's Fit To Print</h2>
      <p>You loaded this <app-relative-time [date]="now()" suffix="Ago" /></p>
    </div>
  `,
  styles: ``,
})
export class NewsHeaderComponent {
  now = signal(new Date().toISOString());
}
