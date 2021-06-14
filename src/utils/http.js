import axios from 'axios'
const http = axios.create({
    timeout: 3000
})
http.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json; charset=UTF-8;',
        };
        return config
    },
    err => {
        console.log(err)
    }
)
http.interceptors.response.use(
    response => {
        return response
    }
)
export default http