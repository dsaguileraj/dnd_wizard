import { useState } from "react";
import { axiosInstance } from "../../api.js";
import { Form, InputSelect, InputText, InputTextArea } from "../../components/forms.jsx";

export const CategoryPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState(undefined);

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/category/", {
                name: name,
                equipment_type: type,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setType(undefined);
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>CategoryPostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                <InputSelect
                    field={type}
                    handleChange={setType}
                    label="Equipment Type"
                    options={[
                        { value: undefined, label: "---" },
                        { value: "A", label: "Armor" },
                        { value: "G", label: "Gear" },
                        { value: "T", label: "Tool" },
                        { value: "W", label: "Weapon" },
                    ]}
                />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const ConditionPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/condition/", {
                name: name,
                description: description,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>ConditionPostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                <InputTextArea field={description} handleChange={setDescription} label="Equipment Type" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const DamageTypePostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/damage_type/", {
                name: name,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>DamageTypePostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const FeaturePostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/feature/", {
                name: name,
                description: description,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>FeaturePostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                <InputTextArea field={description} handleChange={setDescription} label="Equipment Type" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const LanguagePostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/language/", {
                name: name,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>LanguagePostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const MagicSchoolPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/magic_school/", {
                name: name,
                description: description,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>MagicSchoolPostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                <InputTextArea field={description} handleChange={setDescription} label="Equipment Type" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const SkillPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [modifier, setModifier] = useState("STR");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/skill/", {
                name: name,
                modifier: modifier,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setModifier("STR");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>SkillPostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                <InputSelect
                    field={modifier}
                    handleChange={setModifier}
                    label="Modifier"
                    options={[
                        { value: "STR", label: "Strength" },
                        { value: "DEX", label: "Dexterity" },
                        { value: "CON", label: "Constitution" },
                        { value: "INT", label: "Intelligence" },
                        { value: "WIS", label: "Wisdom" },
                        { value: "CHA", label: "Charisma" },
                    ]}
                />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};

export const PropertyPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/rules/property/", {
                name: name,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <>
            <h1>PropertyPostForm</h1>
            <Form handleSubmit={handleSubmit}>
                <InputText field={name} handleChange={setName} label="Name" />
                {errorMessage && <span>{errorMessage}</span>}
            </Form>
        </>
    );
};
