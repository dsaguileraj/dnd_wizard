import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api"
});

export const getAllQuery = async (fn, app, model) => {
    const request = await axiosInstance.get(`/${app}/${model}/`);
    fn(request.data);
};

export const getQueryDetail = async (fn, app, model, id) => {
    const request = await axiosInstance.get(`/${app}/${model}/${id}/`);
    fn(request.data);
};
