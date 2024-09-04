import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdventureGearGET,
  AdventureGearLIST,
  AdventureGearPOST,
  AdventureGearPUT,
} from "@pages/actions/AdventureGear";
import { ArmorGET, ArmorLIST, ArmorPOST, ArmorPUT } from "@pages/actions/Armor";
import { SpellGET, SpellLIST, SpellPOST, SpellPUT } from "@pages/actions/Spell";
import { ToolGET, ToolLIST, ToolPOST, ToolPUT } from "@pages/actions/Tool";
import {
  TrinketGET,
  TrinketLIST,
  TrinketPOST,
  TrinketPUT,
} from "@pages/actions/Trinket";
import {
  WeaponGET,
  WeaponLIST,
  WeaponPOST,
  WeaponPUT,
} from "@pages/actions/Weapon";
import {
  NonPlayableGET,
  NonPlayableLIST,
  NonPlayablePOST,
  NonPlayablePUT,
} from "@pages/characters/NonPlayableCharacter";
import {
  PlayableGET,
  PlayableLIST,
  PlayablePOST,
  PlayablePUT,
} from "@pages/characters/PlayableCharacter";
import { MatchGET, MatchLIST, MatchPOST, MatchPUT } from "@pages/matches/Match";
import {
  CategoryGET,
  CategoryLIST,
  CategoryPOST,
  CategoryPUT,
} from "@pages/rules/Category";
import {
  ConditionGET,
  ConditionLIST,
  ConditionPOST,
  ConditionPUT,
} from "@pages/rules/Condition";
import {
  CreatureTypeGET,
  CreatureTypeLIST,
  CreatureTypePOST,
  CreatureTypePUT,
} from "@pages/rules/CreatureType";
import {
  DamageTypeGET,
  DamageTypeLIST,
  DamageTypePOST,
  DamageTypePUT,
} from "@pages/rules/DamageType";
import {
  FeatureGET,
  FeatureLIST,
  FeaturePOST,
  FeaturePUT,
} from "@pages/rules/Feature";
import {
  ItemPropertyGET,
  ItemPropertyLIST,
  ItemPropertyPOST,
  ItemPropertyPUT,
} from "@pages/rules/ItemProperty";
import {
  LanguageGET,
  LanguageLIST,
  LanguagePOST,
  LanguagePUT,
} from "@pages/rules/Language";
import {
  MagicSchoolGET,
  MagicSchoolLIST,
  MagicSchoolPOST,
  MagicSchoolPUT,
} from "@pages/rules/MagicSchool";
import { SkillGET, SkillLIST, SkillPOST, SkillPUT } from "@pages/rules/Skill";
import {
  BackgroundGET,
  BackgroundLIST,
  BackgroundPOST,
  BackgroundPUT,
} from "@pages/traits/Background";
import { BondGET, BondLIST, BondPOST, BondPUT } from "@pages/traits/Bond";
import {
  ClassGET,
  ClassLIST,
  ClassPOST,
  ClassPUT,
} from "@pages/traits/EntityClass";
import { FlawGET, FlawLIST, FlawPOST, FlawPUT } from "@pages/traits/Flaw";
import { IdealGET, IdealLIST, IdealPOST, IdealPUT } from "@pages/traits/Ideal";
import {
  PersonalityGET,
  PersonalityLIST,
  PersonalityPOST,
  PersonalityPUT,
} from "@pages/traits/Personality";
import {
  ProgressGET,
  ProgressLIST,
  ProgressPOST,
  ProgressPUT,
} from "@pages/traits/ProgressTable";
import { RaceGET, RaceLIST, RacePOST, RacePUT } from "@pages/traits/Race";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Actions */}
        {/* @/AdventureGear */}
        <Route path="/actions/equipment" element={<AdventureGearLIST />} />
        <Route path="/actions/equipment/:id" element={<AdventureGearGET />} />
        <Route
          path="/actions/equipment/create"
          element={<AdventureGearPOST />}
        />
        <Route
          path="/actions/equipment/update/:id"
          element={<AdventureGearPUT />}
        />
        {/* @/Armor */}
        <Route path="/actions/armor" element={<ArmorLIST />} />
        <Route path="/actions/armor/:id" element={<ArmorGET />} />
        <Route path="/actions/armor/create" element={<ArmorPOST />} />
        <Route path="/actions/armor/update/:id" element={<ArmorPUT />} />
        {/* @/Spell */}
        <Route path="/actions/spell" element={<SpellLIST />} />
        <Route path="/actions/spell/:id" element={<SpellGET />} />
        <Route path="/actions/spell/create" element={<SpellPOST />} />
        <Route path="/actions/spell/update/:id" element={<SpellPUT />} />
        {/* @/Tool */}
        <Route path="/actions/tool" element={<ToolLIST />} />
        <Route path="/actions/tool/:id" element={<ToolGET />} />
        <Route path="/actions/tool/create" element={<ToolPOST />} />
        <Route path="/actions/tool/update/:id" element={<ToolPUT />} />
        {/* @/Trinket */}
        <Route path="/actions/trinket" element={<TrinketLIST />} />
        <Route path="/actions/trinket/:id" element={<TrinketGET />} />
        <Route path="/actions/trinket/create" element={<TrinketPOST />} />
        <Route path="/actions/trinket/update/:id" element={<TrinketPUT />} />
        {/* @/Weapon */}
        <Route path="/actions/weapon" element={<WeaponLIST />} />
        <Route path="/actions/weapon/:id" element={<WeaponGET />} />
        <Route path="/actions/weapon/create" element={<WeaponPOST />} />
        <Route path="/actions/weapon/update/:id" element={<WeaponPUT />} />
        {/* Characters */}
        {/* @/NonPlayableCharacter */}
        <Route path="/characters/non-playable" element={<NonPlayableLIST />} />
        <Route
          path="/characters/non-playable/:id"
          element={<NonPlayableGET />}
        />
        <Route
          path="/characters/non-playable/create"
          element={<NonPlayablePOST />}
        />
        <Route
          path="/characters/non-playable/update/:id"
          element={<NonPlayablePUT />}
        />
        {/* @/PlayableCharacter */}
        <Route path="/characters/playable" element={<PlayableLIST />} />
        <Route path="/characters/playable/:id" element={<PlayableGET />} />
        <Route path="/characters/playable/create" element={<PlayablePOST />} />
        <Route
          path="/characters/playable/update/:id"
          element={<PlayablePUT />}
        />
        {/* Matches */}
        {/* @/Match */}
        <Route path="/matches/match" element={<MatchLIST />} />
        <Route path="/matches/match/:id" element={<MatchGET />} />
        <Route path="/matches/match/create" element={<MatchPOST />} />
        <Route path="/matches/match/update/:id" element={<MatchPUT />} />
        {/* Rules */}
        {/* @/Category */}
        <Route path="/rules/category" element={<CategoryLIST />} />
        <Route path="/rules/category/:id" element={<CategoryGET />} />
        <Route path="/rules/category/create" element={<CategoryPOST />} />
        <Route path="/rules/category/update/:id" element={<CategoryPUT />} />
        {/* @/Condition */}
        <Route path="/rules/condition" element={<ConditionLIST />} />
        <Route path="/rules/condition/:id" element={<ConditionGET />} />
        <Route path="/rules/condition/create" element={<ConditionPOST />} />
        <Route path="/rules/condition/update/:id" element={<ConditionPUT />} />
        {/* @/CreatureType */}
        <Route path="/rules/creature_type" element={<CreatureTypeLIST />} />
        <Route path="/rules/creature_type/:id" element={<CreatureTypeGET />} />
        <Route
          path="/rules/creature_type/create"
          element={<CreatureTypePOST />}
        />
        <Route
          path="/rules/creature_type/update/:id"
          element={<CreatureTypePUT />}
        />
        {/* @/DamageType */}
        <Route path="/rules/damage_type" element={<DamageTypeLIST />} />
        <Route path="/rules/damage_type/:id" element={<DamageTypeGET />} />
        <Route path="/rules/damage_type/create" element={<DamageTypePOST />} />
        <Route
          path="/rules/damage_type/update/:id"
          element={<DamageTypePUT />}
        />
        {/* @/Feature */}
        <Route path="/rules/feature" element={<FeatureLIST />} />
        <Route path="/rules/feature/:id" element={<FeatureGET />} />
        <Route path="/rules/feature/create" element={<FeaturePOST />} />
        <Route path="/rules/feature/update/:id" element={<FeaturePUT />} />
        {/* @/ItemProperty */}
        <Route path="/rules/property" element={<ItemPropertyLIST />} />
        <Route path="/rules/property/:id" element={<ItemPropertyGET />} />
        <Route path="/rules/property/create" element={<ItemPropertyPOST />} />
        <Route
          path="/rules/property/update/:id"
          element={<ItemPropertyPUT />}
        />
        {/* @/Language */}
        <Route path="/rules/language" element={<LanguageLIST />} />
        <Route path="/rules/language/:id" element={<LanguageGET />} />
        <Route path="/rules/language/create" element={<LanguagePOST />} />
        <Route path="/rules/language/update/:id" element={<LanguagePUT />} />
        {/* @/MagicSchool */}
        <Route path="/rules/magic_school" element={<MagicSchoolLIST />} />
        <Route path="/rules/magic_school/:id" element={<MagicSchoolGET />} />
        <Route
          path="/rules/magic_school/create"
          element={<MagicSchoolPOST />}
        />
        <Route
          path="/rules/magic_school/update/:id"
          element={<MagicSchoolPUT />}
        />
        {/* @/Skill */}
        <Route path="/rules/property" element={<SkillLIST />} />
        <Route path="/rules/property/:id" element={<SkillGET />} />
        <Route path="/rules/property/create" element={<SkillPOST />} />
        <Route path="/rules/property/update/:id" element={<SkillPUT />} />
        {/* Traits */}
        {/* @/Background */}
        <Route path="/traits/background" element={<BackgroundLIST />} />
        <Route path="/traits/background/:id" element={<BackgroundGET />} />
        <Route path="/traits/background/create" element={<BackgroundPOST />} />
        <Route
          path="/traits/background/update/:id"
          element={<BackgroundPUT />}
        />
        {/* @/Bond */}
        <Route path="/traits/bond" element={<BondLIST />} />
        <Route path="/traits/bond/:id" element={<BondGET />} />
        <Route path="/traits/bond/create" element={<BondPOST />} />
        <Route path="/traits/bond/update/:id" element={<BondPUT />} />
        {/* @/EntityClass */}
        <Route path="/traits/class" element={<ClassLIST />} />
        <Route path="/traits/class/:id" element={<ClassGET />} />
        <Route path="/traits/class/create" element={<ClassPOST />} />
        <Route path="/traits/class/update/:id" element={<ClassPUT />} />
        {/* @/Flaw */}
        <Route path="/traits/flaw" element={<FlawLIST />} />
        <Route path="/traits/flaw/:id" element={<FlawGET />} />
        <Route path="/traits/flaw/create" element={<FlawPOST />} />
        <Route path="/traits/flaw/update/:id" element={<FlawPUT />} />
        {/* @/Ideal */}
        <Route path="/traits/ideal" element={<IdealLIST />} />
        <Route path="/traits/ideal/:id" element={<IdealGET />} />
        <Route path="/traits/ideal/create" element={<IdealPOST />} />
        <Route path="/traits/ideal/update/:id" element={<IdealPUT />} />
        {/* @/Personality */}
        <Route path="/traits/personality" element={<PersonalityLIST />} />
        <Route path="/traits/personality/:id" element={<PersonalityGET />} />
        <Route
          path="/traits/personality/create"
          element={<PersonalityPOST />}
        />
        <Route
          path="/traits/personality/update/:id"
          element={<PersonalityPUT />}
        />
        {/* @/ProgressTable */}
        <Route path="/traits/class_table" element={<ProgressLIST />} />
        <Route path="/traits/class_table/:id" element={<ProgressGET />} />
        <Route path="/traits/class_table/create" element={<ProgressPOST />} />
        <Route
          path="/traits/class_table/update/:id"
          element={<ProgressPUT />}
        />
        {/* @/Race */}
        <Route path="/traits/race" element={<RaceLIST />} />
        <Route path="/traits/race/:id" element={<RaceGET />} />
        <Route path="/traits/race/create" element={<RacePOST />} />
        <Route path="/traits/race/update/:id" element={<RacePUT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
