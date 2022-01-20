import axios from "axios";
import { GetCheckSessionPramType, GetCheckSessionResponseType } from "./tyep";

export async function apiGetCheckSession(info: GetCheckSessionPramType) {
    const response = await axios.get<GetCheckSessionResponseType>(
        `/test/`,
        {
            withCredentials: true,
            timeout: 10000,
            params: {
                id: info.id,
            },
        }
    );

    return response;
}
