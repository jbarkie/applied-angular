import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type counterState = {
  currentCount: number;
  countBy: 1 | 3 | 5;
};

export const CounterStore = signalStore(
  withDevtools('counter'),
  withState<counterState>({ currentCount: 0, countBy: 1 }),
  withMethods((store) => {
    return {
      countBy1: () =>
        patchState(store, { currentCount: store.currentCount(), countBy: 1 }),
      countBy3: () =>
        patchState(store, { currentCount: store.currentCount(), countBy: 3 }),
      countBy5: () =>
        patchState(store, { currentCount: store.currentCount(), countBy: 5 }),
      increment: () =>
        patchState(store, {
          currentCount: store.currentCount() + store.countBy(),
          countBy: store.countBy(),
        }),
      decrement: () =>
        patchState(store, {
          currentCount: store.currentCount() - store.countBy(),
          countBy: store.countBy(),
        }),
    };
  }),
  withComputed((store) => {
    return {
      disabled: computed(() => store.currentCount() - store.countBy() < 0),
      fizzBuzz: computed(() => {
        if (store.currentCount() === 0) return '';
        if (store.currentCount() % 3 === 0 && store.currentCount() % 5 === 0)
          return 'FizzBuzz';
        else if (store.currentCount() % 3 === 0) return 'Fizz';
        else if (store.currentCount() % 5 === 0) return 'Buzz';
        else return '';
      }),
    };
  }),
);
