import { call, put, takeLatest } from "redux-saga/effects";
import { apiGetCheckSession } from "../../apis/test/api";
import { GetCheckSessionResponseType } from "../../apis/test/tyep";
import { getCheckSessionAsync, GET_CHECK_SESSION } from "./actions";

function* getCheckSessionSaga(
    action: ReturnType<typeof getCheckSessionAsync.request>
) {
    //액션을 모니터링 하고 있고 특정 액션 발생 시 요청 액션 생성 함수에 대해 파라미터로 받아 올 수 있습니다.
    try {
        //해당 액션의 payload 값을 인자로 넣어줄 수 있습니다.
        console.log(action.payload);
        const response: GetCheckSessionResponseType = yield call(
            apiGetCheckSession,
            action.payload
        );
        // actions.ts에서 선언한 비동기 처리를 위한 액션 생성함수를 각 특성에 맞게 디스패칭 합니다.
        // 당연히 디스패치를 할 때 넣어줄 인자는 actions.ts에서 정의한 성공, 실패에 대한 타입이 일치해야 합니다.

        yield put(getCheckSessionAsync.success(response));
    } catch (error) {
        // @ts-ignore
        yield put(getCheckSessionAsync.failure(error));
    }
}

export function* testSaga() {
    yield takeLatest(GET_CHECK_SESSION, getCheckSessionSaga);
}

export { testSaga as default };
