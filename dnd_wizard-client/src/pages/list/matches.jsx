import { useEffect, useState } from "react";
import { getQueryList } from "../../api";

export function MatchList() {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getQueryList(setObjects, "matches", "match");
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
        getQueryList(setObjects, "matches", "match_player");
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
