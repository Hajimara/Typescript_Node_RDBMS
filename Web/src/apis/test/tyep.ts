// 세션 유효성 체크
export interface GetCheckSessionPramType {
    id: string;
}
export interface GetCheckSessionResponseType {
    code: string;
    message: string;
    payload: any;
}
