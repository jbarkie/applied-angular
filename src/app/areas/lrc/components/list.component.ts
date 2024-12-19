import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RelativeTimeComponent } from '@shared';
import { map, Subscription } from 'rxjs';
import { PostsStore } from '../services/post-store';

@Component({
  selector: 'app-lrc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RelativeTimeComponent, RouterLink],
  template: `
    @if (store.filter() !== null) {
      <button class="btn btn-sm btn-accent" routerLink=".">
        See all posts
      </button>
    }
    <div class="flex  flex-col gap-4">
      @for (post of store.posts(); track post.id) {
        <div class=" card bg-base-200 shadow-xl">
          <div class="card-body">
            <p class="card-title uppercase font-black">
              {{ post.name }}
            </p>

            <p>
              <a
                [href]="post.link"
                target="_blank"
                class="link text-blue-600"
                >{{ post.link }}</a
              >
            </p>
            <p class="text-lg  font-semibold">
              {{ post.description }}
            </p>
            <p>
              <span class="font-bold">Posted By: </span>
              <a
                class="link"
                routerLink="."
                [queryParams]="{ filter: post.postedBy }"
              >
                {{ post.postedBy }}
              </a>
            </p>
            <p>
              {{ post.datePosted | date: 'medium' }}
              <span class="text-sm   from-neutral-100 font-extralight">
                (<app-relative-time [date]="post.datePosted" />)
              </span>
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class ListComponent implements OnInit, OnDestroy {
  router = inject(Router);
  route = inject(ActivatedRoute);
  store = inject(PostsStore);

  filter$ = this.route.queryParamMap.pipe(map((p) => p.get('filter')));
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    const sub = this.route.queryParamMap
      .pipe(
        map((p) => p.get('filter')), // the value of the filter query or null
        // tap((p) => console.log(p)), // "take a peek"
      )
      .subscribe((p) => this.store.setFilter(p));
    // or use takeUntilDestroyed() to automatically unsubscribe but can only be used in injection context unless provided a DestroyRef
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
