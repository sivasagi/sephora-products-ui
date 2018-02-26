import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ProductsDetailsService {
 

    constructor(private http: Http) {

    }

    loadProductsDetailsData(id: number) {
        if(id){
            return this.http.get('https://sephora-api-frontend-test.herokuapp.com/products/'+id)
            .retry(3)
            .map(res => res.json())
            // .map(res => res)
            .catch((error: any, o: any) => {
                return Observable.throw(error);
            });
        }else{
            return Observable.of();
        }
        
    }
}
