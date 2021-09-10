import axios from "axios";
import {USER_LOGIN} from '../util/settings/config'

export class baseService {

    get = (url) =>{
        return axios({
            url:url,
            method:'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

    post = (url,data) =>{
        return axios({
            url:url,
            data:data,
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

    put = (url,data) => {
        return axios({
            url:url,
            data:data,
            method:'PUT',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }
    delete = (url) => {
        return axios({
            url:url,
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }
}