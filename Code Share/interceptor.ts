import axios, {InternalAxiosRequestConfig} from 'axios';
import {store} from '../redux/store';


axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

    const loginRequestUrl = process.env.REACT_APP_BASE_URL + "/login";

    if(config.url !== loginRequestUrl && config.url?.startsWith(process.env.REACT_APP_BASE_URL + "")){
        const reduxState = store.getState();
        config.headers.Authorization = `Bearer ${reduxState.auth.accessToken}`;
    }

    


    return config;

})