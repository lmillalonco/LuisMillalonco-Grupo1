import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contenido from "./components/Contenido/Contenido";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from './components/ItemDetail/ItemDetail';
import Contacto from "./components/Contacto/Contacto";
import Historia from "./components/Historia/Historia";
export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Contenido />} />
                        <Route path="/products" element={<ItemList />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                        <Route path="/contact" element={<Contacto />} /> 
                        <Route path="/historia" element={<Historia />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};
