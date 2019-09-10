import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector, State, Action } from '@ngrx/store';
import { ProjectActions, ProjectActionTypes } from './project.action';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: []
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
    (state, currentProductId) =>
        state.products.find(p => p.id === currentProductId)
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
                currentProductId: action.payload.id
            };
        case ProjectActionTypes.ClearCurrentProject:
            return {
                ...state,
                currentProductId: null
            };
        default:
            return state;
    }
}
