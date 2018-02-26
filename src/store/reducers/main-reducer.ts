import { Action, ActionReducer } from '@ngrx/store';
import { mainState } from '../states/main-state';
import{ load_products, load_products_success, load_products_failure, loadProducts, loadProductsSuccess, loadProductsFailure, load_products_details,load_products_details_success, load_products_details_failure, loadProductsDetails, loadProductsDetailsSuccess, loadProductsDetailsFailure} from '../actions/main-actions';
export const mainStoreData: ActionReducer<any> = (state: mainState, action: Action) => {
	switch(action.type){
		case load_products:
			const newStateLoadProducts = Object.assign({}, state);
            newStateLoadProducts.isLoading = true;
            return newStateLoadProducts;
        case load_products_success:
        	const newStateLoadProductsSuccess = Object.assign({},state);
        	newStateLoadProductsSuccess.isLoading = false;
        	newStateLoadProductsSuccess.data = action.payload;
        	return newStateLoadProductsSuccess;
        case load_products_failure:
        	const newStateLoadProductsFailure = Object.assign({},state);
        	newStateLoadProductsFailure.isLoading = false;
        	return newStateLoadProductsFailure;

        case load_products_details:
            const newStateLoadProductsDetails = Object.assign({}, state);
            newStateLoadProductsDetails.isLoading = true;
            return newStateLoadProductsDetails;
        case load_products_details_success:
            const newStateLoadProductsDetailsSuccess = Object.assign({},state);
            newStateLoadProductsDetailsSuccess.isLoading = false;
            newStateLoadProductsDetailsSuccess.productDetailsData = action.payload;
            return newStateLoadProductsDetailsSuccess;
        case load_products_details_failure:
            const newStateLoadProductsDetailsFailure = Object.assign({},state);
            newStateLoadProductsDetailsFailure.isLoading = false;
            return newStateLoadProductsDetailsFailure;
        default:
            return state;
	}
}