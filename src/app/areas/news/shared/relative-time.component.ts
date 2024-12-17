import {
  Component,
  ChangeDetectionStrategy,
  signal,
  input,
  effect,
} from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-news-item-relative-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <span>{{ relativeDate() }}</span> `,
  styles: ``,
})
export class RelativeTimeComponent {
  relativeDate = signal('');
  date = input.required<string>();
  constructor() {
    effect(() => {
      const intervalId = setInterval(() => {
        this.relativeDate.set(
          formatDistanceToNow(new Date(this.date())) + ' ago',
        );
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });
  }
}
