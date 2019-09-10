import { Action } from '@ngrx/store';

export enum UserActionTypes {
    MarkUserName = '[User] Mark User Name'
}

export class MarkUserName implements Action {
    readonly type = UserActionTypes.MarkUserName;

    constructor(public payload: boolean) {}
}

export type UserActions = MarkUserName;
