import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export const selectProducts = createSelector(
  (state: { app: State }) => state.app,
  (state) => state.products
);

export const selectError = createSelector(
  (state: { app: State }) => state.app,
  (state) => state.error
);
