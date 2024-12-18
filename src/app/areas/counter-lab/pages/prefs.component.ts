import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="flex gap-4">
    @for (by of store.byValues(); track by) {
      <button class="btn btn-accent" (click)="store.setBy(by)">
        Count by {{ by }}
      </button>
    }
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
