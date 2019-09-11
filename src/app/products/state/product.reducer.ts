import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector, State, Action } from '@ngrx/store';
import { ProjectActions, ProjectActionTypes } from './product.action';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product | null;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export function reducer(state = initialState, action: ProjectActions): ProductState {
    switch (action.type) {
        case ProjectActionTypes.ToggleProjectCode:
            return {
                ...state,
                showProductCode: action.payload,
            };
        case ProjectActionTypes.SetCurrentProject:
            return {
                ...state,
                currentProduct: action.payload
            };
        case ProjectActionTypes.ClearCurrentProject:
            return {
                ...state,
                currentProduct: null
            };
        case ProjectActionTypes.InitializeCurrentProject:
            return {
                ...state,
                currentProduct : {
                    id: 0,
                    productName: '',
                    productCode: 'New',
                    description: '',
                    starRating: 0
                }
            };
        default:
            return state;
    }
}
