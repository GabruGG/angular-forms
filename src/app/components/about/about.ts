import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGroceries } from '../../selectors/grocery.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { addGrocery, fetchCats } from '../../store/reducers/actions/grocery.actions';
import { Grocery } from '../../interface/grocery';

@Component({
  selector: 'app-about',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private store = inject(Store);
  constructor() {
    setTimeout(() => {
      console.log('timeout executed');
      // this.store.dispatch(fetchCats());
      this.store.dispatch(
        addGrocery({
          grocery:{ id: 5, item: 'Coffee', quantity: 3 }
    })
      );
    }, 3000);
  }
  groceries = this.store.select<Grocery[]>(selectGroceries);
  // groceries = toSignal<Grocery[]>(this.store.select(selectGroceries), { initialValue: [] });
}
