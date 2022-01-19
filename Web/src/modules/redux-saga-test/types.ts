import { ActionType } from "typesafe-actions";

import * as actions from './actions';

export type testState = {
    testStringArrData: string[];
    testObjectData: { a: string[]; b: number, c: string};
}

export type testAction = ActionType<typeof actions>;

// 세션 유효성 체크
export interface GetCheckSessionPramType {
    id: string;
}
export interface GetCheckSessionResponseType {
    code: string;
    message: string;
    payload: any;
}
