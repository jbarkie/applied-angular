import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="flex gap-4">
    <select class="select" name="countBy" id="countByDropdown">
      @for (by of store.byValues(); track by) {
        <option value="by">{{ by }}</option>
      }
    </select>
  </div>`,
  styles: ``,
})
export class Prefs2Component {
  store = inject(CounterStore);
}
