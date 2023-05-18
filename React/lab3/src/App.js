import Home from "./components/home";
import Singers from "./components/singers";
import SingerDetails from "./components/singerDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singers/:id" element={<SingerDetails />} />
          <Route path="/singers" element={<Singers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//#endregion
export default App;
