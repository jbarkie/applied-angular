import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @let count = store.currentCount();
    <div>
      <button
        [disabled]="store.disabled()"
        (click)="store.decrement()"
        class="btn btn-secondary"
      >
        -
      </button>
      <span>{{ count }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>

      <div data-testid="fizzBuzz">{{ store.fizzBuzz() }}</div>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
  countBy = this.store.countBy();
}
