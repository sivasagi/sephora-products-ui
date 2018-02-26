import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ProductsService } from '../services/products-service';
import { ProductsDetailsService } from '../services/productsDetails-service';
import{ load_products, load_products_success, load_products_failure,load_products_details,load_products_details_success, load_products_details_failure, loadProducts, loadProductsSuccess, loadProductsFailure, loadProductsDetails, loadProductsDetailsSuccess, loadProductsDetailsFailure} from '../actions/main-actions';

@Injectable()
export class mainEffects {
	constructor(private productsService: ProductsService, 
                private productsDetailsService: ProductsDetailsService,
				private actions$: Actions){

	}
	@Effect() productsData$: Observable<Action> = this.actions$
        .ofType(load_products)
        .switchMap((action) => this.productsService.loadProductsData())
        .publishReplay(1).refCount()
        .map(productsData => new loadProductsSuccess(productsData))
        .catch((error) => Observable.of(new loadProductsFailure(error)));

     @Effect() productsDataDetails$: Observable<Action> = this.actions$
         .ofType(load_products_details)
         .switchMap((action) => this.productsDetailsService.loadProductsDetailsData(action.payload))
         .publishReplay(1).refCount()
         .map(productsDetailsData => new loadProductsDetailsSuccess(productsDetailsData))
         .catch((error) => Observable.of(new loadProductsDetailsFailure(error)));
}