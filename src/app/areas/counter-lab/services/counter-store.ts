import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export const BY_VALUES = [1, 3, 5] as const;
type ByValues = (typeof BY_VALUES)[number];

type counterState = {
  currentCount: number;
  countBy: ByValues;
};

export const CounterStore = signalStore(
  withDevtools('counter'),
  withState<counterState>({ currentCount: 0, countBy: 1 }),
  withMethods((store) => {
    return {
      increment: () =>
        patchState(store, {
          currentCount: store.currentCount() + store.countBy(),
        }),
      decrement: () =>
        patchState(store, {
          currentCount: store.currentCount() - store.countBy(),
        }),
      setBy: (by: ByValues) => patchState(store, { countBy: by }),
    };
  }),
  withComputed((store) => {
    return {
      byValues: computed(() => BY_VALUES),
      disabled: computed(() => store.currentCount() - store.countBy() < 0),
      fizzBuzz: computed(() => isFizzBuzz(store.currentCount())),
    };
  }),
  withHooks({
    onInit(store) {
      const saved = localStorage.getItem('counter');
      if (saved !== null) {
        const state = JSON.parse(saved) as unknown as counterState;
        patchState(store, state);
      }
      watchState(store, (state) => {
        const savedState = JSON.stringify(state);
        localStorage.setItem('counter', savedState);
      });
    },
  }),
);

function isFizzBuzz(count: number): '' | 'Fizz' | 'Buzz' | 'FizzBuzz' {
  if (count === 0) return '';
  else if (count % 3 === 0 && count % 5 === 0) return 'FizzBuzz';
  else if (count % 3 === 0) return 'Fizz';
  else if (count % 5 === 0) return 'Buzz';
  else return '';
}
