import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Product } from '../product';
import { ProductService } from '../product.service';
import * as productActions from './product.action';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
                private productService: ProductService) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ProjectActionTypes.Load),
        mergeMap((actions: productActions.Load) => this.productService.getProducts().pipe(
            map((products: Product[]) => (new productActions.LoadSuccess(products))),
            catchError(err => of(new productActions.LoadFail(err)))
        ))
    );
}
