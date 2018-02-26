import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActionReducer, combineReducers, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { main_app_state } from '../store/states/main-state';
import { mainStoreData } from '../store/reducers/main-reducer';
import { EffectsModule } from '@ngrx/effects';
import { mainEffects } from '../store/effects/main-effects';
import { ProductsService} from '../store/services/products-service';
import { ProductsDetailsService} from '../store/services/productsDetails-service';
import { ProductsComponent } from '../app/products/products.component';
import { ProductDetailComponent } from '../app/product-detail/product-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes : Routes = [
                          {path:'products',component:ProductsComponent},
                          {path:'products/:id',component:ProductDetailComponent},
                          //This shold be always in last position
                          {path:'**',redirectTo:'/products'}
                         ];
export function mainReducer(state: any = main_app_state, action: any) {
    return mainStoreData(state, action);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StoreModule.provideStore(mainReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(mainEffects),
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [ProductsService, ProductsDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
