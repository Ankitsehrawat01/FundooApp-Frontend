import axios from "axios";

export const loginApi = (loginObj) => {
    let response = axios.post('https://localhost:44342/api/User/Login',loginObj)
    return response
}