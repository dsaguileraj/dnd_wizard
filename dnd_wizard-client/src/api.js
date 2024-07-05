import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const axiosPOST = (url, data, setData) => {
  axiosInstance
    .post(url, data)
    .then(response => {
      console.log(response.data);
      setData;
    })
    .catch(error => {
      console.log(error);
      alert('An error occurred. Please try again later.');
    });
};

export const axiosGET = async (fn, app, model, id = undefined) => {
  if (id) {
    const request = await axiosInstance.get(`/${app}/${model}/${id}/`);
    fn(request.data);
  } else {
    const request = await axiosInstance.get(`/${app}/${model}/`);
    fn(request.data);
  }
};