import Axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

const instance = Axios.create({
    // baseUrl: '/',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => {
    return response;
};

// export const requests = {
//     get: (url: string) => instance.get(url).then(responseBody),
//     post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
//     put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
//     delete: (url: string) => instance.delete(url).then(responseBody),
// };

instance.interceptors.request.use(
    function (config) {
        // const token = sessionStorage.getItem('auth_token_dtrix_streamer');
        //
        // config!.headers["Content-Type"] = "application/json; charset=utf-8";
        // config?.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log(error);
    }
);

export default instance;
