import "./Assets/Styles/App.css";
import Accueil from "./Pages/Accueil.js";
import Header from "./Components/Header";
import SideBar from "./Components/Sidebar";

function App() {
    return (
        <div>
            <Header />
            <SideBar />
            <Accueil />
        </div>
    );
}

export default App;
