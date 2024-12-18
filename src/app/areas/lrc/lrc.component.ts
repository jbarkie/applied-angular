import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntryComponent } from './components/entry.component';
import { ListComponent } from './components/list.component';

@Component({
  selector: 'app-lrc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EntryComponent, ListComponent],
  template: `
    <p>LRC stuff here</p>
    <div class="flex">
      <app-lrc-list />
      <app-lrc-entry />
    </div>
  `,
  styles: ``,
})
export class LrcComponent {}
