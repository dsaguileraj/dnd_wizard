import axios from "axios";

export const getQueryList = (app, model) => {
    return axios.get(`http://localhost:8000/api/${app}/${model}/`);
};

export const getQueryDetail = (app, model, id) => {
    return axios.get(`http://localhost:8000/api/${app}/${model}/${id}/`);
};
