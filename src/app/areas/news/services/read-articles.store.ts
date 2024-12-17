import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { NewsArticle } from '../types';

export const ReadArticleStore = signalStore(
  withEntities<NewsArticle>(),
  withMethods((store) => {
    // later
    return {
      addArticle: (article: NewsArticle) =>
        patchState(store, addEntity(article)),
    };
  }),
);
