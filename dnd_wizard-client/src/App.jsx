import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ArmorFormPage, ArmorPage } from "./pages/actions/armor";
import { EquipmentFormPage, EquipmentPage } from "./pages/actions/equipment";
import { PropertyFormPage, PropertyPage } from "./pages/actions/property";
import { SpellFormPage, SpellPage } from "./pages/actions/spell";
import { WeaponFormPage, WeaponPage } from "./pages/actions/weapon";
import { CharacterFormPage, CharacterPage } from "./pages/characters/character";
import { ClassFormPage, ClassPage } from "./pages/characters/class";
import { MonsterFormPage, MonsterPage } from "./pages/characters/monster";
import { RaceFormPage, RacePage } from "./pages/characters/race";
import { MatchFormPage, MatchPage } from "./pages/matches";
import { BackgroundFormPage, BackgroundPage } from "./pages/traits/background";
import { BondFormPage, BondPage } from "./pages/traits/bond";
import { FeatureFormPage, FeaturePage } from "./pages/traits/feature";
import { FlawFormPage, FlawPage } from "./pages/traits/flaw";
import { IdealFormPage, IdealPage } from "./pages/traits/ideal";
import { LanguageFormPage, LanguagePage } from "./pages/traits/language";
import { PersonalityFormPage, PersonalityPage } from "./pages/traits/personality";
import { ProficiencyFormPage, ProficiencyPage } from "./pages/traits/proficiency";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
                {/* Actions */}
                <Route path="/armor" element={ArmorPage} />
                <Route path="/armor/create" element={ArmorFormPage} />
                <Route path="/equipment" element={EquipmentPage} />
                <Route path="/equipment/create" element={EquipmentFormPage} />
                <Route path="/property" element={PropertyPage} />
                <Route path="/property/create" element={PropertyFormPage} />
                <Route path="/spell" element={SpellPage} />
                <Route path="/spell/create" element={SpellFormPage} />
                <Route path="/weapon" element={WeaponPage} />
                <Route path="/weapon/create" element={WeaponFormPage} />
                {/* Characters */}
                <Route path="/character" element={CharacterPage} />
                <Route path="/character/create" element={CharacterFormPage} />
                <Route path="/class" element={ClassPage} />
                <Route path="/class/create" element={ClassFormPage} />
                <Route path="/monster" element={MonsterPage} />
                <Route path="/monster/create" element={MonsterFormPage} />
                <Route path="/race" element={RacePage} />
                <Route path="/race/create" element={RaceFormPage} />
                {/* Matchs */}
                <Route path="/match" element={MatchPage} />
                <Route path="/match/create" element={MatchFormPage} />
                {/* Traits */}
                <Route path="/background" element={BackgroundPage} />
                <Route path="/background/create" element={BackgroundFormPage} />
                <Route path="/bond" element={BondPage} />
                <Route path="/bond/create" element={BondFormPage} />
                <Route path="/feature" element={FeaturePage} />
                <Route path="/feature/create" element={FeatureFormPage} />
                <Route path="/flaw" element={FlawPage} />
                <Route path="/flaw/create" element={FlawFormPage} />
                <Route path="/ideal" element={IdealPage} />
                <Route path="/ideal/create" element={IdealFormPage} />
                <Route path="/language" element={LanguagePage} />
                <Route path="/language/create" element={LanguageFormPage} />
                <Route path="/personality" element={PersonalityPage} />
                <Route path="/personality/create" element={PersonalityFormPage} />
                <Route path="/proficiency" element={ProficiencyPage} />
                <Route path="/proficiency/create" element={ProficiencyFormPage} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
