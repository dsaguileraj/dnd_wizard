import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { ArmorList, EquipmentList, PropertyList, SpellList, ToolList, TrinketList, WeaponList } from "./pages/list/actions.jsx";
import { CharacterList, ClassList, MonsterList, RaceList } from "./pages/list/characters.jsx";
import { MatchList, MatchPlayerList } from "./pages/list/matches.jsx";
import { BackgroundList, BondList, FeatureList, FlawList, IdealList, LanguageList, PersonalityList, ProficiencyList } from "./pages/list/traits.jsx";
import { PropertyPostForm } from "./pages/create/actions.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
                {/* Actions */}
                <Route path="/armor" element={<ArmorList />} />
                <Route path="/equipment" element={<EquipmentList />} />
                <Route path="/property" element={<PropertyList />} />
                <Route path="/property/create" element={<PropertyPostForm />} />
                <Route path="/spell" element={<SpellList />} />
                <Route path="/tool" element={<ToolList />} />
                <Route path="/trinket" element={<TrinketList />} />
                <Route path="/weapon" element={<WeaponList />} />
                {/* Characters */}
                <Route path="/character" element={<CharacterList />} />
                <Route path="/class" element={<ClassList />} />
                <Route path="/monster" element={<MonsterList />} />
                <Route path="/race" element={<RaceList />} />
                {/* Matchs */}
                <Route path="/match" element={<MatchList />} />
                <Route path="/match_player" element={<MatchPlayerList />} />
                {/* Traits */}
                <Route path="/background" element={<BackgroundList />} />
                <Route path="/bond" element={<BondList />} />
                <Route path="/feature" element={<FeatureList />} />
                <Route path="/flaw" element={<FlawList />} />
                <Route path="/ideal" element={<IdealList />} />
                <Route path="/language" element={<LanguageList />} />
                <Route path="/personality" element={<PersonalityList />} />
                <Route path="/proficiency" element={<ProficiencyList />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
