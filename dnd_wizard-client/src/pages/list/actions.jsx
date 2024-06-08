import { List } from "../../components/List.jsx";

export function ArmorList() {
    return (
        <>
            <h1>ArmorList</h1>
            <List app="actions" model="armor" />
        </>
    );
}

export function EquipmentList() {
    return (
        <>
            <h1>EquipmentList</h1>
            <List app="actions" model="equipment" />
        </>
    );
}

export function PropertyList() {
    return (
        <>
            <h1>PropertyList</h1>
            <List app="actions" model="property" />
        </>
    );
}

export function SpellList() {
    return (
        <>
            <h1>SpellList</h1>
            <List app="actions" model="spell" />
        </>
    );
}

export function ToolList() {
    return (
        <>
            <h1>ToolList</h1>
            <List app="actions" model="tool" />
        </>
    );
}

export function WeaponList() {
    return (
        <>
            <h1>WeaponList</h1>
            <List app="actions" model="weapon" />
        </>
    );
}