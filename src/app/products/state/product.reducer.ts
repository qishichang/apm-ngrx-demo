import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector, State, Action } from '@ngrx/store';
import { ProjectActions, ProjectActionTypes } from './product.action';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProjectId) => {
        if (currentProjectId === 0) {
            return {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            };
        } else {
            return currentProjectId ? state.products.find(p => p.id === currentProjectId) : null;
        }
    }
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
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
                currentProductId: action.payload.id
            };
        case ProjectActionTypes.ClearCurrentProject:
            return {
                ...state,
                currentProductId: null
            };
        case ProjectActionTypes.InitializeCurrentProject:
            return {
                ...state,
                currentProductId: 0
            };
        case ProjectActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };
        case ProjectActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            };
        default:
            return state;
    }
}
