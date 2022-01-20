import { ActionType } from "typesafe-actions";

import * as actions from './actions';

export type testState = {
    status: number;
    statusText: string;
    data: any;
}

export type testAction = ActionType<typeof actions>;

// 세션 유효성 체크
export interface GetCheckSessionPramType {
    id: string;
}
export interface GetCheckSessionResponseType {
    status: number;
    statusText: string;
    data: any;
}
