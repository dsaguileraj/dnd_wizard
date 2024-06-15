import { useState } from "react";
import { axiosInstance } from "../../api";

export const PropertyPostForm = () => {
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/property/", {
                name: name,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
            <button type="submit">Crear</button>
            {errorMessage && <span>{errorMessage}</span>}
        </form>
    );
};
