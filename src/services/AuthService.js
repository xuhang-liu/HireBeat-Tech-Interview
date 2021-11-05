import axios from '../config/Axios';


export const loginRequest = (config) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/authentication.json', config)
            .then(resolve)
            .catch(reject);
    });
};
export const fetchUserData = (config) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/authentication.json', config)
            .then(resolve)
            .catch(reject);
    });
};
export const fetchUsers = (config) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/users.json', config)
            .then(resolve)
            .catch(reject);
    });
};
export const fetchMoreUsers = (config) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/moreusers.json', config)
            .then(resolve)
            .catch(reject);
    });
};