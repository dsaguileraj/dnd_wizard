import { useState } from "react";
import { axiosInstance } from "../../api.js";
import { Form, InputCheck, InputNumber, InputSelect, InputText, InputTextArea } from "../../components/forms.jsx";

export const ArmorPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Armaduras Ligeras");
    const [price, setPrice] = useState(0);
    const [coin, setCoin] = useState("pc");
    const [weight, setWeight] = useState(0);
    const [weightMeasure, setWeightMeasure] = useState("g");
    const [armorClass, setArmorClass] = useState(0);
    const [dexterityBonus, setDexterityBonus] = useState(false);
    const [minStrength, setMinStrength] = useState(0);
    const [disadvantageStealth, setDisadvantageStealth] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/armor/", {
                name: name,
                category: category,
                price: price,
                coin: coin,
                weight: weight,
                weight_measure: weightMeasure,
                armor_class: armorClass,
                dexterity_bonus: dexterityBonus,
                min_strength: minStrength,
                disadvantage_stealth: disadvantageStealth,
            })
            .then((response) => {
                console.log(response.data);
                setName("");
                setCategory("Armaduras Ligeras");
                setPrice(0);
                setCoin("pc");
                setWeight(0);
                setWeightMeasure("g");
                setArmorClass(0);
                setDexterityBonus(false);
                setMinStrength(0);
                setDisadvantageStealth(false);
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <Form handleSubmit={handleSubmit}>
            <InputText field={name} handleChange={setName} label="Nombre" maxLength={50} />
            <InputSelect
                field={category}
                handleChange={setCategory}
                label="Categoria"
                options={[
                    { value: "Armaduras Ligeras", label: "Armaduras Ligeras" },
                    { value: "Armaduras Medianas", label: "Armaduras Medianas" },
                    { value: "Armaduras Pesadas", label: "Armaduras Pesadas" },
                    { value: "Escudos", label: "Escudos" },
                ]}
            />
            <InputNumber field={price} handleChange={setPrice} label="Precio" />
            <InputSelect
                field={coin}
                handleChange={setCoin}
                label="Moneda"
                options={[
                    { value: "pc", label: "pc" },
                    { value: "pp", label: "pp" },
                    { value: "pe", label: "pe" },
                    { value: "po", label: "po" },
                    { value: "ppt", label: "ppt" },
                ]}
            />
            <InputNumber field={weight} handleChange={setWeight} label="Peso" />
            <InputSelect
                field={weightMeasure}
                handleChange={setWeightMeasure}
                label="Magnitud"
                options={[
                    { value: "g", label: "Gramo" },
                    { value: "kg", label: "Kilogramo" },
                    { value: "lb", label: "Libra" },
                    { value: "oz", label: "Onza" },
                ]}
            />
            <InputNumber field={armorClass} handleChange={setArmorClass} label="CA" />
            <InputCheck handleChange={setDexterityBonus} label="Bonificador de Destreza" />
            <InputNumber field={minStrength} handleChange={setMinStrength} label="FUE" />
            <InputCheck handleChange={setDisadvantageStealth} label="Desventaja en Sigilo" />
            {errorMessage && <span>{errorMessage}</span>}
        </Form>
    );
};

export const EquipmentPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(undefined);
    const [price, setPrice] = useState(0);
    const [coin, setCoin] = useState("pc");
    const [weight, setWeight] = useState(0);
    const [weightMeasure, setWeightMeasure] = useState("g");
    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/equipment/", {
                name: name,
                category: category,
                price: price,
                coin: coin,
                weight: weight,
                weight_measure: weightMeasure,
                description: description,
            })
            .then((response) => {
                console.log(response.data);
                setName("");
                setCategory(undefined);
                setPrice(0);
                setCoin("pc");
                setWeight(0);
                setWeightMeasure("g");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <Form handleSubmit={handleSubmit}>
            <InputText field={name} handleChange={setName} label="Nombre" maxLength={50} />
            <InputSelect
                field={category}
                handleChange={setCategory}
                label="Categoria"
                options={[
                    { value: undefined, label: "---" },
                    { value: "Canalizadores Arcanos", label: "Canalizadores Arcanos" },
                    { value: "Canalizadores Druídicos", label: "Canalizadores Druídicos" },
                    { value: "Mercancías", label: "Mercancías" },
                    { value: "Munición", label: "Munición" },
                    { value: "Símbolos Sagrados", label: "Símbolos Sagrados" },
                ]}
            />
            <InputNumber field={price} handleChange={setPrice} label="Precio" />
            <InputSelect
                field={coin}
                handleChange={setCoin}
                label="Moneda"
                options={[
                    { value: "pc", label: "pc" },
                    { value: "pp", label: "pp" },
                    { value: "pe", label: "pe" },
                    { value: "po", label: "po" },
                    { value: "ppt", label: "ppt" },
                ]}
            />
            <InputNumber field={weight} handleChange={setWeight} label="Peso" />
            <InputSelect
                field={weightMeasure}
                handleChange={setWeightMeasure}
                label="Magnitud"
                options={[
                    { value: "g", label: "Gramo" },
                    { value: "kg", label: "Kilogramo" },
                    { value: "lb", label: "Libra" },
                    { value: "oz", label: "Onza" },
                ]}
            />
            <InputTextArea field={description} handleChange={setDescription} label="Descripción" maxLength={1250} />
            {errorMessage && <span>{errorMessage}</span>}
        </Form>
    );
};

export const PropertyPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/property/", {
                name: name,
            })
            .then((response) => {
                console.log(response.data);
                setName("");
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <Form handleSubmit={handleSubmit}>
            <InputText field={name} handleChange={setName} label="Nombre" maxLength={50} />
            {errorMessage && <span>{errorMessage}</span>}
        </Form>
    );
};

export const ToolPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(undefined);
    const [price, setPrice] = useState(0);
    const [coin, setCoin] = useState("pc");
    const [weight, setWeight] = useState(0);
    const [weightMeasure, setWeightMeasure] = useState("g");
    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/tool/", {
                name: name,
                category: category,
                price: price,
                coin: coin,
                weight: weight,
                weight_measure: weightMeasure,
                description: description,
            })
            .then((response) => {
                console.log(response.data);
                setName("");
                setCategory(undefined);
                setPrice(0);
                setCoin("pc");
                setWeight(0);
                setWeightMeasure("g");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <Form handleSubmit={handleSubmit}>
            <InputText field={name} handleChange={setName} label="Nombre" maxLength={50} />
            <InputSelect
                field={category}
                handleChange={setCategory}
                label="Categoria"
                options={[
                    { value: undefined, label: "---" },
                    { value: "Herramientas de Artesano", label: "Herramientas de Artesano" },
                    { value: "Instrumentos Musicales", label: "Instrumentos Musicales" },
                    { value: "Juegos", label: "Juegos" },                    
                ]}
            />
            <InputNumber field={price} handleChange={setPrice} label="Precio" />
            <InputSelect
                field={coin}
                handleChange={setCoin}
                label="Moneda"
                options={[
                    { value: "pc", label: "pc" },
                    { value: "pp", label: "pp" },
                    { value: "pe", label: "pe" },
                    { value: "po", label: "po" },
                    { value: "ppt", label: "ppt" },
                ]}
            />
            <InputNumber field={weight} handleChange={setWeight} label="Peso" />
            <InputSelect
                field={weightMeasure}
                handleChange={setWeightMeasure}
                label="Magnitud"
                options={[
                    { value: "g", label: "Gramo" },
                    { value: "kg", label: "Kilogramo" },
                    { value: "lb", label: "Libra" },
                    { value: "oz", label: "Onza" },
                ]}
            />
            <InputTextArea field={description} handleChange={setDescription} label="Descripción" maxLength={1250} />
            {errorMessage && <span>{errorMessage}</span>}
        </Form>
    );
};