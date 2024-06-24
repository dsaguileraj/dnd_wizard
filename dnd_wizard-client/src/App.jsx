import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { List } from "./components/List.jsx";
import { ArmorPostForm } from "./pages/create/actions.jsx";
import { CategoryPostForm, ConditionPostForm, DamageTypePostForm, FeaturePostForm, LanguagePostForm, MagicSchoolPostForm, PropertyPostForm, SkillPostForm } from "./pages/create/rules.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
                {/* ACTIONS */}
                {/* Armor */}
                <Route path="/armor" element={<List app="actions" model="armor" />} />
                <Route path="/armor/create" element={<ArmorPostForm/>} />
                {/* Equipment */}
                <Route path="/equipment" element={<List app="actions" model="equipment" />} />
                <Route path="/spell" element={<List app="actions" model="spell" />} />
                <Route path="/tool" element={<List app="actions" model="tool" />} />
                <Route path="/trinket" element={<List app="actions" model="trinket" />} />
                <Route path="/weapon" element={<List app="actions" model="weapon" />} />
                {/* CHARACTERS */}
                <Route path="/playable" element={<List app="characters" model="playable" />} />
                <Route path="/non-playable" element={<List app="characters" model="non-playable" />} />
                {/* MATCHS */}
                <Route path="/match" element={<List app="matches" model="match" />} />
                <Route path="/match_player" element={<List app="matches" model="match_player" />} />
                {/* RULES */}
                {/* Category */}
                <Route path="/category" element={<List app="rules" model="category" />} />
                <Route path="/category/create" element={<CategoryPostForm/>} />
                {/* Condition */}
                <Route path="/condition" element={<List app="rules" model="condition" />} />
                <Route path="/condition/create" element={<ConditionPostForm/>} />
                {/* Damage Type */}
                <Route path="/damage_type" element={<List app="rules" model="damage_type" />} />
                <Route path="/damage_type/create" element={<DamageTypePostForm />} />
                {/* Feature */}
                <Route path="/feature" element={<List app="rules" model="feature" />} />
                <Route path="/feature/create" element={<FeaturePostForm />} />
                {/* Language */}
                <Route path="/language" element={<List app="rules" model="language" />} />
                <Route path="/language/create" element={<LanguagePostForm />} />
                {/* Magic School */}
                <Route path="/magic_school" element={<List app="rules" model="magic_school" />} />
                <Route path="/magic_school/create" element={<MagicSchoolPostForm />} />
                {/* Skill */}
                <Route path="/skill" element={<List app="rules" model="skill" />} />
                <Route path="/skill/create" element={<SkillPostForm />} />
                {/* Property */}
                <Route path="/property" element={<List app="rules" model="property" />} />
                <Route path="/property/create" element={<PropertyPostForm />} />
                {/* TRAITS */}
                <Route path="/background" element={<List app="traits" model="background" />} />
                <Route path="/class" element={<List app="traits" model="class" />} />
                <Route path="/race" element={<List app="traits" model="race" />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
