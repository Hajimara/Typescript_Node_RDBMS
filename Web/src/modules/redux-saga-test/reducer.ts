import { createReducer } from "typesafe-actions";

import { testAction, testState } from "./types";
import { SET_STRING_ARR, SET_OBJECT } from "./actions";

const initialState: testState = {
    testStringArrData: [],
    testObjectData: {
        a: [],
        b: 0,
        c: "",
    },
}

//createReducer는 reducer를 쉽게 작성할 수 있도록 하는 모듈이며
//타입 오류를 방지 할 수 있습니다.
const reducer = createReducer<testState, testAction>(initialState, {
    [SET_STRING_ARR]: (state, action) => ({
        ...state,
        testStringArrData: action.payload,
    }),
    [SET_OBJECT]: (state, action) => ({
        ...state,
        testObjectData: action.payload,
    }),
});

export default reducer;
