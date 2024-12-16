import { Component } from '@angular/core';

import { NewsComponent } from './areas/news/news.component';

@Component({
  selector: 'app-root',
  template: `
    <section class="container mx-auto">
      <app-news />
    </section>
  `,
  styles: [],
  imports: [NewsComponent],
})
export class AppComponent {}
