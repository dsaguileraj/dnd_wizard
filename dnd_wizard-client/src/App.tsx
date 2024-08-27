import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/actions" element={""}/>
        <Route path="/characters" element={""}/>
        <Route path="/matches" element={""}/>
        <Route path="/rules" element={""}/>
        <Route path="/traits" element={""}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
