import { Action, createReducer, on } from '@ngrx/store';
import { loadProductsSuccess, loadProductsFailure } from './actions';

export interface State {
  products: any[];
  error: any;
}

export const initialState: State = {
  products: [],
  error: null
};

const _appReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function appReducer(state: State | undefined, action: Action) {
  return _appReducer(state, action);
}
