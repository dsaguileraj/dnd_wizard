import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";

export const ArmorList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "armor");
    }, []);
    return (
        <div>
            <h1>ArmorList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const EquipmentList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "equipment");
    }, []);
    return (
        <div>
            <h1>EquipmentList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const PropertyList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "property");
    }, []);
    return (
        <div>
            <h1>PropertyList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const SpellList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "spell");
    }, []);
    return (
        <div>
            <h1>SpellList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const ToolList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "tool");
    }, []);
    return (
        <div>
            <h1>ToolList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const TrinketList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "trinket");
    }, []);
    return (
        <div>
            <h1>TrinketList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};

export const WeaponList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "weapon");
    }, []);
    return (
        <div>
            <h1>WeaponList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
};
