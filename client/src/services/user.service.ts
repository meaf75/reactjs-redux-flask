import axios from "axios";
import { API_ENDPOINT } from "../constants/ApiEndpoint";
import { AxiosSecured } from "../constants/AxiosSecured";

export const GetCurrentUser = () => {
    return AxiosSecured.get(`${API_ENDPOINT}/api/users/`);
}

export const CreateUser = (body: {name: string,lastname: string,username: string, password: string, mail: string}) => {
    return axios.post(`${API_ENDPOINT}/api/users/`,body);
}