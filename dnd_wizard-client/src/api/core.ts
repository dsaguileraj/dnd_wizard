import { AxiosInstance } from "axios";

export const URL = "http:localhost:8000/api";

export const axiosDELETE = (
  axiosInstance: AxiosInstance,
  id: string,
  setData: React.SetStateAction<any>
) => {
  axiosInstance
    .delete(`${id}/`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
      alert(error.request.response);
    });
};

export const axiosGET = (
  axiosInstance: AxiosInstance,
  setData: React.SetStateAction<any>
) => {
  axiosInstance
    .get("")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
      alert(error.request.response);
    });
};

export const axiosPOST = (
  axiosInstance: AxiosInstance,
  data: any,
  setData: React.SetStateAction<any>
) => {
  axiosInstance
    .post("", data)
    .then((respone) => {
      console.log(respone.data);
      setData;
    })
    .catch((error) => {
      console.log(error.request.response);
      alert(error.request.response);
    });
};

export const axiosPUT = (
  axiosInstance: AxiosInstance,
  id: string,
  data: any,
  setData: React.SetStateAction<any>
) => {
  axiosInstance
    .put(`${id}/`, data)
    .then((respone) => {
      console.log(respone.data);
      setData;
    })
    .catch((error) => {
      console.log(error.request.response);
      alert(error.request.response);
    });
};

export const axiosRET = (
  axiosInstance: AxiosInstance,
  id: string,
  setData: React.SetStateAction<any>
) => {
  axiosInstance
    .get(`${id}/`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
      alert(error.request.response);
    });
};
