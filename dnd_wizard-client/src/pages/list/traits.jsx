import { useEffect, useState } from "react";
import { getQueryList } from "../../api";

export function BackgroundList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "background");
    }, []);
    return (
        <div>
            <h1>BackgroundList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function BondList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "bond");
    }, []);
    return (
        <div>
            <h1>BondList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function FeatureList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "feature");
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
}

export function FlawList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "flaw");
    }, []);
    return (
        <div>
            <h1>FlawList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function IdealList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "ideal");
    }, []);
    return (
        <div>
            <h1>IdealList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function LanguageList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "language");
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
}

export function PersonalityList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "personality");
    }, []);
    return (
        <div>
            <h1>PersonalityList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function ProficiencyList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "traits", "proficiency");
    }, []);
    return (
        <div>
            <h1>ProficiencyList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}
