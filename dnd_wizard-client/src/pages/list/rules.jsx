import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";

export const CategoryList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "category");
    }, []);
    return (
        <div>
            <h1>CategoryList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const ConditionList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "condition");
    }, []);
    return (
        <div>
            <h1>ConditionList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const DamageTypeList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "damage_type");
    }, []);
    return (
        <div>
            <h1>DamageTypeList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const FeatureList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "feature");
    }, []);
    return (
        <div>
            <h1>FeatureList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const LanguageList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "language");
    }, []);
    return (
        <div>
            <h1>LanguageList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const LanguageList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "rules", "language");
    }, []);
    return (
        <div>
            <h1>LanguageList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};
