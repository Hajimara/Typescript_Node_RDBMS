import { createReducer } from "typesafe-actions";

import { testAction, testState } from "./types";
import {SET_STRING_ARR, SET_OBJECT, GET_CHECK_SESSION_ERROR, GET_CHECK_SESSION_SUCCESS} from "./actions";

const initialState: testState = {
    status: 0,
    statusText: "",
    data: "",
}

//createReducer는 reducer를 쉽게 작성할 수 있도록 하는 모듈이며
//타입 오류를 방지 할 수 있습니다.
const reducer = createReducer<testState, testAction>(initialState, {
    [GET_CHECK_SESSION_SUCCESS]: (state, action) => ({
        ...state,
        data: action.payload?.data,
        status: action.payload?.status,
        statusText: action.payload?.statusText
    }),
    [GET_CHECK_SESSION_ERROR]: (state, action) => ({
        ...state,
        error: action.payload
    }),
});

export default reducer;
