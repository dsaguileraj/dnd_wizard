import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ArmorFormPage } from "./pages/actions/armor/ArmorFormPage";
import { ArmorPage } from "./pages/actions/armor/ArmorPage";
import { EquipmentFormPage } from "./pages/actions/equipment/EquipmentFormPage";
import { EquipmentPage } from "./pages/actions/equipment/EquipmentPage";
import { PropertyFormPage } from "./pages/actions/property/PropertyFormPage";
import { PropertyPage } from "./pages/actions/property/PropertyPage";
import { SpellFormPage } from "./pages/actions/spell/SpellFormPage";
import { SpellPage } from "./pages/actions/spell/SpellPage";
import { WeaponFormPage } from "./pages/actions/weapon/WeaponFormPage";
import { WeaponPage } from "./pages/actions/weapon/WeaponPage";
import { CharacterFormPage } from "./pages/characters/character/CharacterFormPage";
import { CharacterPage } from "./pages/characters/character/CharacterPage";
import { ClassFormPage } from "./pages/characters/class/ClassFormPage";
import { ClassPage } from "./pages/characters/class/ClassPage";
import { MonsterFormPage } from "./pages/characters/monster/MonsterFormPage";
import { MonsterPage } from "./pages/characters/monster/MonsterPage";
import { RaceFormPage } from "./pages/characters/race/RaceFormPage";
import { RacePage } from "./pages/characters/race/RacePage";
import { MatchFormPage } from "./pages/matches/MatchFormPage";
import { MatchPage } from "./pages/matches/MatchPage";
import { BackgroundFormPage } from "./pages/traits/background/BackgroundFormPage";
import { BackgroundPage } from "./pages/traits/background/BackgroundPage";
import { BondFormPage } from "./pages/traits/bond/BondFormPage";
import { BondPage } from "./pages/traits/bond/BondPage";
import { FeatureFormPage } from "./pages/traits/feature/FeatureFormPage";
import { FeaturePage } from "./pages/traits/feature/FeaturePage";
import { FlawFormPage } from "./pages/traits/flaw/FlawFormPage";
import { FlawPage } from "./pages/traits/flaw/FlawPage";
import { IdealFormPage } from "./pages/traits/ideal/IdealFormPage";
import { IdealPage } from "./pages/traits/ideal/IdealPage";
import { LanguageFormPage } from "./pages/traits/language/LanguageFormPage";
import { LanguagePage } from "./pages/traits/language/LanguagePage";
import { PersonalityFormPage } from "./pages/traits/personality/PersonalityFormPage";
import { PersonalityPage } from "./pages/traits/personality/PersonalityPage";
import { ProficiencyFormPage } from "./pages/traits/proficiency/ProficiencyFormPage";
import { ProficiencyPage } from "./pages/traits/proficiency/ProficiencyPage";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
                {/* Actions */}
                <Route path="/armor" element={<ArmorPage />} />
                <Route path="/armor/create" element={<ArmorFormPage />} />
                <Route path="/equipment" element={<EquipmentPage />} />
                <Route path="/equipment/create" element={<EquipmentFormPage />} />
                <Route path="/property" element={<PropertyPage />} />
                <Route path="/property/create" element={<PropertyFormPage />} />
                <Route path="/spell" element={<SpellPage />} />
                <Route path="/spell/create" element={<SpellFormPage />} />
                <Route path="/weapon" element={<WeaponPage />} />
                <Route path="/weapon/create" element={<WeaponFormPage />} />
                {/* Characters */}
                <Route path="/character" element={<CharacterPage />} />
                <Route path="/character/create" element={<CharacterFormPage />} />
                <Route path="/class" element={<ClassPage />} />
                <Route path="/class/create" element={<ClassFormPage />} />
                <Route path="/monster" element={<MonsterPage />} />
                <Route path="/monster/create" element={<MonsterFormPage />} />
                <Route path="/race" element={<RacePage />} />
                <Route path="/race/create" element={<RaceFormPage />} />
                {/* Matchs */}
                <Route path="/match" element={<MatchPage />} />
                <Route path="/match/create" element={<MatchFormPage />} />
                {/* Traits */}
                <Route path="/background" element={<BackgroundPage />} />
                <Route path="/background/create" element={<BackgroundFormPage />} />
                <Route path="/bond" element={<BondPage />} />
                <Route path="/bond/create" element={<BondFormPage />} />
                <Route path="/feature" element={<FeaturePage />} />
                <Route path="/feature/create" element={<FeatureFormPage />} />
                <Route path="/flaw" element={<FlawPage />} />
                <Route path="/flaw/create" element={<FlawFormPage />} />
                <Route path="/ideal" element={<IdealPage />} />
                <Route path="/ideal/create" element={<IdealFormPage />} />
                <Route path="/language" element={<LanguagePage />} />
                <Route path="/language/create" element={<LanguageFormPage />} />
                <Route path="/personality" element={<PersonalityPage />} />
                <Route path="/personality/create" element={<PersonalityFormPage />} />
                <Route path="/proficiency" element={<ProficiencyPage />} />
                <Route path="/proficiency/create" element={<ProficiencyFormPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
