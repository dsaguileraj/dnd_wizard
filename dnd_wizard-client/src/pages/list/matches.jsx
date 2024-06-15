import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";

export function MatchList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "matches", "match");
    }, []);
    return (
        <div>
            <h1>MatchList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}

export function MatchPlayerList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "matches", "match_player");
    }, []);
    return (
        <div>
            <h1>MatchPlayerList</h1>
            <ol>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ol>
        </div>
    );
}
