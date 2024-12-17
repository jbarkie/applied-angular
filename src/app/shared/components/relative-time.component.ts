import {
  Component,
  ChangeDetectionStrategy,
  signal,
  input,
  effect,
} from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-relative-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <span>{{ relativeDate() }}</span> `,
  styles: ``,
})
export class RelativeTimeComponent {
  relativeDate = signal('');
  suffix = signal(' ago');
  date = input.required<string>();
  constructor() {
    effect(() => {
      const intervalId = setInterval(() => {
        this.relativeDate.set(
          formatDistanceToNow(new Date(this.date())) + this.suffix(),
        );
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });
  }
}
