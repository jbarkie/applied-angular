import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HistoryComponent } from './components/history.component';
import { UiComponent } from './components/ui.component';

@Component({
  selector: 'app-golf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UiComponent, HistoryComponent],
  template: `
    <div class="flex gap-12 ">
      <app-ui />
      <app-history />
    </div>
  `,
  styles: ``,
})
export class GolfComponent {}
