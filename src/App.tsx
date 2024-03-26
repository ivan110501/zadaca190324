import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Pokemon from "./pages/pokemon";
import Croatia from "./pages/croatia";
import Profile from "./pages/profile";
import Vjezbe from "./pages/vjebze";
import DataTypes from "./pages/data-types";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="contact" element={<Contact />} />

          <Route path="pokemon" element={<Pokemon />} />
          <Route path="croatia" element={<Croatia />} />
          <Route path="profile" element={<Profile />} />
          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="data-types" element={<DataTypes />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
