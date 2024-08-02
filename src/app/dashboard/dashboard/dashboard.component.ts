import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts, selectError } from '../../store/selectors';
import { loadProducts } from '../../store/actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products$: Observable<any[]>;
  error$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts()); // Dispatch action to load products
    this.products$ = this.store.select(selectProducts); // Select products from store
    this.error$ = this.store.select(selectError); // Select errors from store
  }
}
