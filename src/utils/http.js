const makeApiCall = (url,options={}) => fetch(url, options).then(res => res.json());

const get = url => makeApiCall(url);

const http = {
    get
}; 

export default http;