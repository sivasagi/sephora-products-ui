import { Action } from '@ngrx/store';

export const load_products = 'Loading products';
export const load_products_success = 'Loading products success';
export const load_products_failure = 'Loading products failure';

export const load_products_details = 'Loading products';
export const load_products_details_success = 'Loading products details success';
export const load_products_details_failure = 'Loading products details failure';

export class loadProducts implements Action{
	readonly type: string = load_products;
	constructor() {

    }

}

export class loadProductsSuccess implements Action{
	readonly type: string = load_products_success;
	constructor(public payload?: any) {

    }
	
}

export class loadProductsFailure implements Action{
	readonly type: string = load_products_failure;
	constructor(public payload?: any) {

    }
}

export class loadProductsDetails implements Action{
	readonly type: string = load_products_details;
	constructor(public payload: any) {

    }

}

export class loadProductsDetailsSuccess implements Action{
	readonly type: string = load_products_details_success;
	constructor(public payload?: any) {

    }
	
}

export class loadProductsDetailsFailure implements Action{
	readonly type: string = load_products_details_failure;
	constructor(public payload?: any) {

    }
}