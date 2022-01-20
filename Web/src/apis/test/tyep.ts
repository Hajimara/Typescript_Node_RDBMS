// 세션 유효성 체크
export interface GetCheckSessionPramType {
    id: string;
}

// api 와 saga에서 response 타입 적용
export interface GetCheckSessionResponseType {
    statusText: string;
    status: number;
    data: any;
}
