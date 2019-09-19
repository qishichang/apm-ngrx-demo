import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProjectActionTypes {
    ToggleProjectCode = '[Project] Toggle Project Code',
    SetCurrentProject = '[Project] Set Current Project',
    ClearCurrentProject = '[Project] Clear Current Project',
    InitializeCurrentProject = '[Project] Initialize Current Project',
    Load = '[Project] Load',
    LoadFail = '[Project] Load Fail',
    LoadSuccess = '[Project] Load Success',
    UpdateProject = '[Project] Update Project',
    UpdateProjectSuccess = '[Project] Update Project Success',
    UpdateProjectFail = '[Project] Update Project Fail'
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

export class Load implements Action {
    readonly type = ProjectActionTypes.Load;
}

export class LoadFail implements Action {
    readonly type = ProjectActionTypes.LoadFail;

    constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
    readonly type = ProjectActionTypes.LoadSuccess;

    constructor(public payload: Product[]) {}
}

export class UpdateProject implements Action {
    readonly type = ProjectActionTypes.UpdateProject;

    constructor(public payload: Product) { }
}

export class UpdateProjectSuccess implements Action {
    readonly type = ProjectActionTypes.UpdateProjectSuccess;

    constructor(public payload: Product) {}
}

export class UpdateProjectFail implements Action {
    readonly type = ProjectActionTypes.UpdateProjectFail;

    constructor(public payload: string) {}
}

export type ProjectActions = ToggleProjectCode
    | SetCurrentProject
    | ClearCurrentProject
    | InitializeCurrentProject
    | Load
    | LoadFail
    | LoadSuccess
    | UpdateProject
    | UpdateProjectSuccess
    | UpdateProjectFail;
