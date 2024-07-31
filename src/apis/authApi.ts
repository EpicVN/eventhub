import { appInfo } from "../constants/appInfos";
import axiosClient from "./axiosClient"

class AuthAPI {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put',

    ) => {
        return await axiosClient(`${appInfo.BASE_URL}/auth${url}`, {
            method: method ?? 'get',
            data,
        })
    };
};

const authenticationAPI = new AuthAPI();

export default authenticationAPI;
