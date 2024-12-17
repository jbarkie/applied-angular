import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GolfStore } from '../services/golf-store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <span
        >Current score: {{ store.currentScore() }} for hole {{ store.hole() }}
        <button
          (click)="store.takeAStroke()"
          class="btn btn-circle btn-success pr-4"
        >
          +
        </button>
        <button
          [disabled]="store.sunkDisabled()"
          (click)="store.sunk()"
          class="btn btn-circle btn-accent"
        >
          S
        </button>
      </span>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(GolfStore);
  currentScore = signal(0);
}
