import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout = 60 * 1000 * 10;
axios.interceptors.request.use(
    (config) => {
        // config.headers['X-Requested-With'] = 'XMLHttpRequest'
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        // config.headers['Content-Type'] = 'application/json; charset=UTF-8';
        // config.data = qs.stringify(manage.data)
        // config.headers['Content-Type'] = 'application/json; charset=UTF-8';
        // config.headers['Authorization'] = getToken() ? getToken() : null;
        // manage.headers['X-CSRFToken'] = sessionStorage.getItem('csrftoken');
        // config.headers['Cookie'] = 'Hm_lvt_b0668f30d62e1597bdb36d05edea8960=1604221499,1604560772,1604655241; Hm_lpvt_b0668f30d62e1597bdb36d05edea8960=1604911501; sid=f2295ce4-5905-47d2-b119-9747e7749674';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        return response['data'];
    } else {
        throw new Error(response.data.message); // eslint-disable-line
    }
    throw new Error(response.statusText); // eslint-disable-line
}

export function request(config) {
    return axios.request(config).then(checkStatus);
}

export function get(url, params) {
    // let queryData = Object.assign(params, {t: new Date().getTime()})
    return axios.get(url, { params }).then(checkStatus);
}

export function delet(url, params) {
    return axios.delete(url, params).then(checkStatus);
}

export function post(url, data, config) {
    return axios.post(url, qs.stringify(data), config).then(checkStatus);
}

export function put(url, data, config) {
    return axios.put(url, data, config).then(checkStatus);
}

export function patch(url, data, config) {
    return axios.patch(url, data, config).then(checkStatus);
}
