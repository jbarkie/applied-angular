import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="flex gap-4">
    <button (click)="store.countBy1()" class="btn btn-accent">
      Count by 1
    </button>
    <button (click)="store.countBy3()" class="btn btn-accent">
      Count by 3
    </button>
    <button (click)="store.countBy5()" class="btn btn-accent">
      Count by 5
    </button>
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
