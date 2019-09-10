import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProjectActionTypes {
    ToggleProjectCode = '[Project] Toggle Project Code',
    SetCurrentProject = '[Project] Set Current Project',
    ClearCurrentProject = '[Project] Clear Current Project',
    InitializeCurrentProject = '[Project] Initialize Current Project'
}

export class ToggleProjectCode implements Action {
    readonly type = ProjectActionTypes.ToggleProjectCode;

    constructor(public payload: boolean) {}
}

export class SetCurrentProject implements Action {
    readonly type = ProjectActionTypes.SetCurrentProject;

    constructor(public payload: Product) {}
}

export class ClearCurrentProject implements Action {
    readonly type = ProjectActionTypes.ClearCurrentProject;
}

export class InitializeCurrentProject implements Action {
    readonly type = ProjectActionTypes.InitializeCurrentProject;
}

export type ProjectActions = ToggleProjectCode
    | SetCurrentProject
    | ClearCurrentProject
    | InitializeCurrentProject;
