import { useEffect, useState } from "react";
import { getQueryList } from "../../api";

export function CharacterList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "characters", "character");
    }, []);
    return (
        <div>
            <h1>CharacterList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function ClassList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "characters", "class");
    }, []);
    return (
        <div>
            <h1>ClassList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function MonsterList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "characters", "monster");
    }, []);
    return (
        <div>
            <h1>MonsterList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function RaceList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "characters", "race");
    }, []);
    return (
        <div>
            <h1>RaceList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}
