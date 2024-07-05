import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation.jsx';
// import { List } from './components/List.jsx';
// import { ArmorPostForm } from './pages/create/actions.jsx';
import {
  CategoryPOST,
  ConditionPOST,
  CreatureTypePOST,
  DamageTypePOST,
  FeaturePOST,
  PropertyPOST,
  LanguagePOST,
  MagicSchoolPOST,
  SkillPOST
} from './pages/create/rules.jsx';
// import { ArmorList } from './pages/list/actions.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/armor" />} /> */}
        {/* POST Rule */}
        <Route path='/category/create' element={<CategoryPOST />} />
        <Route path='/condition/create' element={<ConditionPOST />} />
        <Route path='/creature_type/create' element={<CreatureTypePOST />} />
        <Route path='/damage_type/create' element={<DamageTypePOST />} />
        <Route path='/feature/create' element={<FeaturePOST />} />
        <Route path='/language/create' element={<LanguagePOST />} />
        <Route path='/magic_school/create' element={<MagicSchoolPOST />} />
        <Route path='/property/create' element={<PropertyPOST />} />
        <Route path='/skill/create' element={<SkillPOST />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
