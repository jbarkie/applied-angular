import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { PostApiResponseItem } from '../types';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { computed, inject } from '@angular/core';
import { PostApi } from './post-api';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

type PostsStoreState = {
  filter: string | null;
};
export const PostsStore = signalStore(
  withDevtools('posts'),
  withState<PostsStoreState>({
    filter: null,
  }),
  withEntities({ collection: '_server', entity: type<PostApiResponseItem>() }),
  withEntities({ collection: '_outbox', entity: type<PostApiResponseItem>() }),
  withMethods((store) => {
    const api = inject(PostApi);
    return {
      setFilter: (filter: string | null) => patchState(store, { filter }),
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            api
              .getPosts()
              .pipe(
                tap((posts) =>
                  patchState(
                    store,
                    addEntities(posts, { collection: '_server' }),
                  ),
                ),
              ),
          ),
        ),
      ),
    };
  }),
  withComputed((store) => {
    return {
      posts: computed(() => {
        const posts = store._serverEntities();
        if (store.filter() !== null) {
          return posts.filter((p) => p.postedBy === store.filter());
        } else {
          return posts;
        }
      }),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);