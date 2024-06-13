import { useEffect, useState } from "react";
import { getQueryList } from "../../api";

export function ArmorList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "armor");
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
}

export function EquipmentList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "equipment");
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
}

export function PropertyList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "property");
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
}

export function SpellList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "spell");
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
}

export function ToolList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "tool");
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
}

export function TrinketList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "trinket");
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
}

export function WeaponList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "actions", "weapon");
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
}
