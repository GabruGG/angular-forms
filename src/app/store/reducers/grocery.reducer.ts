import { createReducer, on } from '@ngrx/store';
import { addGrocery, fetchCats } from './actions/grocery.actions';
import { Grocery } from '../../interface/grocery';

const initialState: Grocery[] = [
  { id: 1, item: 'Milk', quantity: 5 },
  { id: 2, item: 'Tea', quantity: 2 },
  { id: 3, item: 'Turmeric', quantity: 8 },
  { id: 4, item: 'Cloves', quantity: 7 },
];

export const groceryReducer = createReducer(
  initialState,

  on(fetchCats, (state,data) => {
    console.log('actionnnns data waala', state,data);
    return [
      { id: 1, item: 'Milk12', quantity: 5 },
      { id: 2, item: 'Tea12', quantity: 2 },
    ];
  }),

  on(addGrocery, (state,data) => {
    console.log('add grocery wala', state,data);
    return [
      ...state,data.grocery
    ];
  })





);
