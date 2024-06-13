import axios from "axios";

export async function getQueryList(f, app, model) {
    const request = await axios.get(`http://localhost:8000/api/${app}/${model}/`);
    f(request.data);
}

export async function getQueryDetail(f, app, model, id) {
    const request = await axios.get(`http://localhost:8000/api/${app}/${model}/${id}/`);
    f(request.data);
}