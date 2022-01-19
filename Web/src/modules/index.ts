import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';

import test, { testSaga } from './redux-saga-test';

const rootReducer = combineReducers({
    test,
})

export default rootReducer;

// 컴포넌트에서 사용하게 될 스토어에 저장된 데이터의 타입
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
    yield all([testSaga()]);
}
