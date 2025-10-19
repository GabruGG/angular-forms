import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../interface/grocery';

export const selectGroceriesState =
  createFeatureSelector<Grocery[]>('groceries');

export const selectGroceries = createSelector(
  selectGroceriesState,
  (state) => {
    console.log("state",state)
    return state
  }
);
