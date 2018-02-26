import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
 

    constructor(private http: Http) {

    }

    loadProductsData() {
        // return this.httpClient.get(`/api/vdp/v1.0/vehicle/equipment/statement/${vehicleId}`)
        return this.http.get('https://sephora-api-frontend-test.herokuapp.com/products')
            .retry(3)
            .map(res => res.json())
            // .map(res => res)
            .catch((error: any, o: any) => {
                return Observable.throw(error);
            });
    }
}
