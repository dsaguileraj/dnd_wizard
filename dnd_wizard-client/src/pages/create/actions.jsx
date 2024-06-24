import { useEffect, useState } from "react";
import { axiosInstance, getAllQuery } from "../../api.js";
import { Form, InputCheck, InputNumber, InputSelect, InputText, InputTextArea } from "../../components/forms.jsx";

export const ArmorPostForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0);
    const [coin, setCoin] = useState("cp");
    const [weight, setWeight] = useState(0);
    const [weightMeasure, setWeightMeasure] = useState("g");
    const [armorClass, setArmorClass] = useState(0);
    const [dexterityBonus, setDexterityBonus] = useState(false);
    const [minStrength, setMinStrength] = useState(0);
    const [disadvantageStealth, setDisadvantageStealth] = useState(false);
    const [category, setCategory] = useState(undefined);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getAllQuery(setCategoryList, "rules", "category");
    }, []);

    let categoryOptions = [{value: undefined, label: "---"}]
    categoryList.forEach(c => (categoryOptions.push({value: c.id, label: c.name})))

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/actions/armor/", {
                name: name,
                cost: cost,
                coin: coin,
                weight: weight,
                weight_measure: weightMeasure,
                armor_class: armorClass,
                dexterity_bonus: dexterityBonus,
                min_strength: minStrength,
                disadvantage_stealth: disadvantageStealth,
                category: category,
            })
            .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                setName("");
                setCost(0);
                setCoin("cp");
                setWeight(0);
                setWeightMeasure("g");
                setArmorClass(0);
                setDexterityBonus(false);
                setMinStrength(0);
                setDisadvantageStealth(false);
                setCategory(undefined);
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred. Please try again later.");
            });
    };
    return (
        <Form handleSubmit={handleSubmit}>
            <InputText field={name} handleChange={setName} label="Name" />
            <InputNumber field={cost} handleChange={setCost} label="Cost" />
            <InputSelect
                field={coin}
                handleChange={setCoin}
                label="Coin"
                options={[
                    { value: "cp", label: "Copper" },
                    { value: "sp", label: "Silver" },
                    { value: "ep", label: "Electrum" },
                    { value: "gp", label: "Gold" },
                    { value: "pp", label: "Platinum" },
                ]}
            />
            <InputNumber field={weight} handleChange={setWeight} label="Weight" />
            <InputSelect
                field={weightMeasure}
                handleChange={setWeightMeasure}
                label="Weight Measure"
                options={[
                    { value: "g", label: "Gram" },
                    { value: "kg", label: "Kilogram" },
                    { value: "lb", label: "Pound" },
                    { value: "oz", label: "Ounce" },
                ]}
            />
            <InputNumber field={armorClass} handleChange={setArmorClass} label="Armor Class" />
            <InputCheck handleChange={setDexterityBonus} label="Dexterity Bonus" />
            <InputNumber field={minStrength} handleChange={setMinStrength} label="Min. STR" />
            <InputCheck handleChange={setDisadvantageStealth} label="Stealth Disadvantage" />
            <InputSelect field={category} handleChange={setCategory} label="Category" options={categoryOptions} />
            {errorMessage && <span>{errorMessage}</span>}
        </Form>
    );
};
