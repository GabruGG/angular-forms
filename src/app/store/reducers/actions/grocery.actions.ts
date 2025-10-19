import { createAction, props } from "@ngrx/store";
import { Grocery } from "../../../interface/grocery";



export const fetchCats = createAction('[Groceries] fetch cats');

export const addGrocery = createAction('[Groceries] add grocery',props<{grocery:Grocery}>());