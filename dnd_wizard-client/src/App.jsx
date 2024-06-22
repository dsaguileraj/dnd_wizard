import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { ArmorList, EquipmentList, PropertyList, SpellList, ToolList, TrinketList, WeaponList } from "./pages/list/actions.jsx";
import { CharacterList, ClassList, MonsterList, RaceList } from "./pages/list/characters.jsx";
import { MatchList, MatchPlayerList } from "./pages/list/matches.jsx";
import { BackgroundList, BondList, FeatureList, FlawList, IdealList, LanguageList, PersonalityList, ProficiencyList } from "./pages/list/traits.jsx";
import { ArmorPostForm, EquipmentPostForm, PropertyPostForm, ToolPostForm } from "./pages/create/actions.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
                {/* Actions */}
                <Route path="/armor" element={<ArmorList />} />
                <Route path="/armor/create" element={<ArmorPostForm />} />
                <Route path="/equipment" element={<EquipmentList />} />
                <Route path="/equipment/create" element={<EquipmentPostForm />} />
                <Route path="/spell" element={<SpellList />} />
                <Route path="/tool" element={<ToolList />} />
                <Route path="/tool/create" element={<ToolPostForm />} />
                <Route path="/trinket" element={<TrinketList />} />
                <Route path="/weapon" element={<WeaponList />} />
                {/* Characters */}
                <Route path="/playable" element={<CharacterList />} />
                <Route path="/non-playable" element={<MonsterList />} />
                {/* Matchs */}
                <Route path="/match" element={<MatchList />} />
                <Route path="/match_player" element={<MatchPlayerList />} />
                {/* Rules */}
                <Route path="/category" element={<PropertyList />} />
                <Route path="/condition" element={<PropertyList />} />
                <Route path="/damage_type" element={<PropertyList />} />
                <Route path="/feature" element={<FeatureList />} />
                <Route path="/language" element={<LanguageList />} />
                <Route path="/magic_school" element={<PropertyList />} />
                <Route path="/skill" element={<PropertyList />} />
                <Route path="/property" element={<PropertyList />} />
                <Route path="/property/create" element={<PropertyPostForm />} />
                {/* Traits */}
                <Route path="/background" element={<BackgroundList />} />
                <Route path="/bond" element={<BondList />} />
                <Route path="/class" element={<ClassList />} />
                <Route path="/flaw" element={<FlawList />} />
                <Route path="/ideal" element={<IdealList />} />
                <Route path="/personality" element={<PersonalityList />} />
                <Route path="/race" element={<RaceList />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
