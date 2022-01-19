import {createAction, createAsyncAction} from "typesafe-actions";
import {GetCheckSessionPramType, GetCheckSessionResponseType} from "../../apis/test/tyep";
import {AxiosError} from "axios";

// as const 상수 선언
// type assertion의 한 종류로써 리터럴 타입의 추론 범위를 줄이고 값의 재할당을 막기 위한 목적
// action type
export const SET_STRING_ARR = 'redux-saga-test/SET_STRING_ARR' as const;
export const SET_OBJECT = 'redux-saga-test/SET_OBJECT' as const;

// action create function
export const setStringArr = createAction(SET_STRING_ARR)<string[]>();
export const setObject = createAction(SET_OBJECT)<{
    a: string[],
    b: number,
    c: string;
}>();

//비동기 액션 타입
export const GET_CHECK_SESSION = 'test/GET_CHECK_SESSION' as const;
export const GET_CHECK_SESSION_SUCCESS = 'test/GET_CHECK_SESSION_SUCCESS' as const;
export const GET_CHECK_SESSION_ERROR = 'test/GET_CHECK_SESSION_ERROR' as const;

//비동기 액션 생성 함수
export const getCheckSessionAsync = createAsyncAction(
    GET_CHECK_SESSION,
    GET_CHECK_SESSION_SUCCESS,
    GET_CHECK_SESSION_ERROR
)<GetCheckSessionPramType, GetCheckSessionResponseType, AxiosError>();
