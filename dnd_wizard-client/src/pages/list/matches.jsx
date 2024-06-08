import { List } from "../../components/List";

export function MatchList() {
    return (
        <>
            <h1>MatchList</h1>
            <List app="matches" model="match" />
        </>
    );
}

export function MatchPlayerList() {
    return (
        <>
            <h1>MatchPlayerList</h1>
            <List app="matches" model="match_player" />
        </>
    );
}
