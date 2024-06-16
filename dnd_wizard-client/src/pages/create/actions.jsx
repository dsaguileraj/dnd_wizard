import { useState } from "react";
import { axiosInstance } from "../../api";

export const ArmorPostForm = () => {
    const [name, setName] = useState("");
    const [coin, setCoin] = useState("");
    const [price, setPrice] = useState(0);
    const [weigth, setWeigth] = useState(0.0);
    const [weigthMeasure, setWeigthMeasure] = useState("");
    const [category, setCategory] = useState("");
    const [armorClass, setArmorClass] = useState(0);
    const [dexterityBonus, setDexterityBonus] = useState(false);
    const [minStrength, setMinStrength] = useState(0);
    const [disadvantageStealth, setDisadvantageStealth] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/armor/", {
                name: name,
                coin: coin,
                price: price,
                weigth: weigth,
                weigth_measure: weigthMeasure,
                category: category,
                armor_class: armorClass,
                dexterity_bonus: dexterityBonus,
                min_strength: minStrength,
                disadvantage_stealth: disadvantageStealth,
            })
            .then((response) => {
                console.log(response);
                setName("");
                setCoin("");
                setPrice(0);
                setWeigth(0.0);
                setWeigthMeasure("");
                setCategory("");
                setArmorClass(0);
                setDexterityBonus(false);
                setMinStrength(0);
                setDisadvantageStealth(false);
                setErrorMessage("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" title="name" value={name} onChange={(event) => setName(event.target.value)} required />
            <label>Moneda</label>
            <select name="" title="coin" value={coin} onChange={(event) => setCoin(event.target.value)}>
                <option value="pc">Cobre</option>
                <option value="pp">Plata</option>
                <option value="pe">Electro</option>
                <option value="po">Oro</option>
                <option value="ppt">Platino</option>
            </select>
            <label>Precio</label>
            <input type="number" name="price" title="price" value={price} onChange={(event) => setPrice(event.target.value)} required />
            <label>Peso</label>
            <input type="number" name="weight" title="weight" value={weigth} onChange={(event) => setWeigth(event.target.value)} required />
            <label>Magnitud</label>
            <select name="weigthMeasure" title="weigthMeasure" value={weigthMeasure} onChange={(event) => setWeigthMeasure(event.target.value)}>
                <option value="g">Gramo</option>
                <option value="kg">Kilogramo</option>
                <option value="lb">Libra</option>
                <option value="oz">Onza</option>
            </select>
            <label>Categoria</label>
            <select name="category" title="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="Armaduras Ligeras">Armaduras Ligeras</option>
                <option value="Armaduras Medianas">Armaduras Medianas</option>
                <option value="Armaduras Pesadas">Armaduras Pesadas</option>
                <option value="Escudos">Escudos</option>
            </select>
            <label>CA</label>
            <input type="number" name="armorClass" title="armorClass" value={armorClass} onChange={(event) => setArmorClass(event.target.value)} required />
            <label>Bonificador de Destreza</label>
            <input type="checkbox" name="dexterityBonus" title="dexterityBonus" value={dexterityBonus} onChange={(event) => setDexterityBonus(event.target.checked)} />
            <label>Min. FUE</label>
            <input type="number" name="minStrength" title="minStrength" value={minStrength} onChange={(event) => setMinStrength(event.target.value)} required />
            <label>Desventajas en Sigilo</label>
            <input type="checkbox" name="disadvantageStealth" title="disadvantageStealth" value={disadvantageStealth} onChange={(event) => setDisadvantageStealth(event.target.checked)} />
            <button type="submit">Crear</button>
            {errorMessage && <span>{errorMessage}</span>}
        </form>
    );
};

export const EquipmentPostForm = () => {
    const [name, setName] = useState("");
    const [coin, setCoin] = useState("");
    const [price, setPrice] = useState(0);
    const [weigth, setWeigth] = useState(0.0);
    const [weigthMeasure, setWeigthMeasure] = useState("");
    const [category, setCategory] = useState("");
    const [measureUnit, setMeasureUnit] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/equipment/", {
                name: name,
                coin: coin,
                price: price,
                weigth: weigth,
                weigth_measure: weigthMeasure,
                category: category,
                measure_unit: measureUnit,
                description: description,
            })
            .then((response) => {
                console.log(response);
                setName("");
                setCoin("");
                setPrice(0);
                setWeigth(0.0);
                setWeigthMeasure("");
                setCategory("");
                setMeasureUnit("");
                setDescription("");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" title="name" value={name} onChange={(event) => setName(event.target.value)} required />
            <label>Moneda</label>
            <select name="" title="coin" value={coin} onChange={(event) => setCoin(event.target.value)}>
                <option value="pc">Cobre</option>
                <option value="pp">Plata</option>
                <option value="pe">Electro</option>
                <option value="po">Oro</option>
                <option value="ppt">Platino</option>
            </select>
            <label>Precio</label>
            <input type="number" name="price" title="price" value={price} onChange={(event) => setPrice(event.target.value)} required />
            <label>Peso</label>
            <input type="number" name="weight" title="weight" value={weigth} onChange={(event) => setWeigth(event.target.value)} required />
            <label>Magnitud</label>
            <select name="weigthMeasure" title="weigthMeasure" value={weigthMeasure} onChange={(event) => setWeigthMeasure(event.target.value)}>
                <option value="g">Gramo</option>
                <option value="kg">Kilogramo</option>
                <option value="lb">Libra</option>
                <option value="oz">Onza</option>
            </select>
            <label>Categoria</label>
            <select name="category" title="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value={null}>---</option>
                <option value="Canalizadores Arcanos">Canalizadores Arcanos</option>
                <option value="Canalizadores Druídicos">Canalizadores Druídicos</option>
                <option value="Mercancías">Mercancías</option>
                <option value="Munición">Munición</option>
                <option value="Símbolos Sagrados">Símbolos Sagrados</option>
            </select>
            <select name="measureUnit" title="measureUnit" value={measureUnit} onChange={(event) => setMeasureUnit(event.target.value)}>
                <option value={null}>---</option>
                <option value="g">Gramo</option>
                <option value="kg">Kilogramo</option>
                <option value="lb">Libra</option>
                <option value="oz">Onza</option>
            </select>
            <textarea name="descripttion" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
            {errorMessage && <span>{errorMessage}</span>}
        </form>
    );
};

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
                setName("");
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" title="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
            <button type="submit">Crear</button>
            {errorMessage && <span>{errorMessage}</span>}
        </form>
    );
};
