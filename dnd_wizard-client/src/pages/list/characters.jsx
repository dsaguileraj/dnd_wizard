import { List } from "../../components/List";

export function CharacterList() {
    return (
        <>
            <h1>CharacterList</h1>
            <List app="characters" model="character" />
        </>
    );
}

export function ClassList() {
    return (
        <>
            <h1>ClassList</h1>
            <List app="characters" model="class" />
        </>
    );
}
export function MonsterList() {
    return (
        <>
            <h1>MonsterList</h1>
            <List app="characters" model="monster" />
        </>
    );
}
export function RaceList() {
    return (
        <>
            <h1>RaceList</h1>
            <List app="characters" model="race" />
        </>
    );
}