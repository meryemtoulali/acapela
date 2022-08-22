import "./Assets/Styles/App.css";

import Accueil from "./Pages/Accueil.js";
import EspaceClient from "./Pages/EspaceClient";
import CommunesVilles from "./Pages/CommunesVilles";
import PointsInteretTable from "./Pages/Points-Interet/PointsInteretTable";
import PointsInteretListe from "./Pages/Points-Interet/PointsInteretListe";
import PointsInteretForm from "./Pages/Points-Interet/PointsInteretForm"

import CircuitsListe from "./Pages/Circuits/CircuitsListe";
import CircuitsForm from "./Pages/Circuits/CircuitsForm";

import Corbeille from "./Pages/Corbeille";
import ModifierMdp from "./Pages/ModifierMdp";
import Deconnexion from "./Pages/Deconnexion";
import AjouterVille from "./Pages/AjouterVille"
import ModifierTable from "./Pages/ModifierTable"
import DetailsVille from "./Pages/DetailsVille"

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


                <Route path="/points-d-interet/table" element={<PointsInteretTable />} />
                <Route path="/points-d-interet/liste" element={<PointsInteretListe />} />
                <Route path="/points-d-interet/form" element={<PointsInteretForm />} />
                <Route path="/points-d-interet/form/:id" element={<PointsInteretForm />} />


                <Route path="/circuits/liste" element={<CircuitsListe />} />
                <Route path="/circuits/form" element={<CircuitsForm />} />
                <Route path="/circuits/form/:id" element={<CircuitsForm />} />


                <Route path="/corbeille" element={<Corbeille />} />
                <Route path="/ajouter-ville" element={<AjouterVille />} />
                <Route path="/ajouter-ville/:id" element={<AjouterVille />} />


                <Route path="/details/:id" element={<DetailsVille/>}/>
                <Route
                    path="/modifier-mot-de-passe"
                    element={<ModifierMdp />}
                />
                <Route
                    path="/modifier-table/:id"
                    element={<ModifierTable />}
                />
                <Route path="/deconnexion" element={<Deconnexion />} />
            </Routes>
        </div>
    );
}

export default App;
