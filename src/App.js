import "./Assets/Styles/App.css";
import Accueil from "./Pages/Accueil.js";
import EspaceClient from "./Pages/EspaceClient";
import CommunesVilles from "./Pages/CommunesVilles";
import PointsInteret from "./Pages/PointsInteret";
import Circuits from "./Pages/Circuits";
import Corbeille from "./Pages/Corbeille";
import ModifierMdp from "./Pages/ModifierMdp";
import Deconnexion from "./Pages/Deconnexion";
import AjouterVille from "./Pages/AjouterVille"

import Header from "./Components/Header";
import SideBar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <SideBar />

            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/espace-client" element={<EspaceClient />} />
                <Route path="/communes-villes" element={<CommunesVilles />} />
                <Route path="/points-d-interet" element={<PointsInteret />} />
                <Route path="/circuits" element={<Circuits />} />
                <Route path="/corbeille" element={<Corbeille />} />
                <Route path="/ajouter-ville" element={<AjouterVille />} />
                <Route path="/ajouter-ville/:id" element={<AjouterVille />} />
                <Route
                    path="/modifier-mot-de-passe"
                    element={<ModifierMdp />}
                />
                <Route path="/deconnexion" element={<Deconnexion />} />
            </Routes>
        </div>
    );
}

export default App;
