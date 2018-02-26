import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ loadProductsDetails } from '../../store/actions/main-actions';
import { Store } from '@ngrx/store';
import { mainState } from '../../store/states/main-state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: any;
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<mainState>) { }

  ngOnInit() {
  	this.productID = this.activatedRoute.snapshot.params['id'];
    if(this.productID){
      const productNumber = parseInt(this.productID);
      this.store.dispatch(new loadProductsDetails(productNumber));
      this.store.select(state => state.productDetailsData).subscribe(
        (res) => {
          if(res){
            this.productDetails = res.data;
          }
        }
      );
    }
  }

}
