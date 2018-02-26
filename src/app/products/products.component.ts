import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {mainState} from '../../store/states/main-state';
import{ loadProducts } from '../../store/actions/main-actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<mainState>, private router: Router) { }
  initialProductsArrayWithoutFilters = [];
  productsArray = [];
  uniqueCategoriesArray = [];
  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;
  checkbox6 = false;
  loadingProducts: boolean = true;
  displayCategoriesFilter: boolean = false;
  displayPriceFilter: boolean = false;
  selectedAllFilters = [];
  selectedFilters = [];

  ngOnInit() {

  	this.store.dispatch(new loadProducts() );
  	this.store.select(state => state.data).subscribe(
  		(res) => {
        this.initialProductsArrayWithoutFilters = res.data;
  			this.productsArray = res.data;
        if(this.productsArray){
            this.uniqueCategoriesArray = this.productsArray.filter((thing, index, self) =>
              index === self.findIndex((t) => (
                t.attributes.category === thing.attributes.category
              ))
            );
        }
  		}
  	);
  	this.store.select(state => state.isLoading).subscribe(
  		(res) => {
  			this.loadingProducts = res;
  		}
  	);
  }
  filterProductsByPrice(event){
   if(this.productsArray){
       if(this.checkbox1){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price <= 25);
       }
       if(this.checkbox2){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price == 25 && product.attributes.price == 50);
       }
       if(this.checkbox3){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price == 50 && product.attributes.price == 100);
       }
       if(this.checkbox4){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price == 150 && product.attributes.price == 200);
       }
       if(this.checkbox5){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price == 150 && product.attributes.price == 200);
       }
       if(this.checkbox6){
         this.productsArray = this.initialProductsArrayWithoutFilters.filter(product => product.attributes.price > 200);
       }
    }
  }
  showCategoriesFilter(){
    this.displayCategoriesFilter = this.displayCategoriesFilter? false: true;
  }
  showPriceFilter(){
    this.displayPriceFilter = this.displayPriceFilter ? false : true;
  }
  clearAllFilters(){
    this.productsArray = this.initialProductsArrayWithoutFilters;
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.checkbox4 = false;
    this.checkbox5 = false;
    this.checkbox6 = false;
    this.selectedFilters = [];
  }
  filterProductsByCategories(categoryName: string){
      if(this.productsArray && categoryName){
        this.selectedAllFilters.push(categoryName);
        this.productsArray = this.productsArray.filter(product => product.attributes.category == categoryName);
        this.getUniqueArray();
      }
  }
  goToProductDetailPage(id: any){
    this.router.navigate(['../products/'+id]);
  }
  getUniqueArray(){
    this.selectedFilters = this.selectedAllFilters.filter((x, i, a) => x && a.indexOf(x) === i);
  }

}
