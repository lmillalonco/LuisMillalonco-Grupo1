import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contenido from "./components/Contenido/Contenido";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Contacto from "./components/Contacto/Contacto";
import Historia from "./components/Historia/Historia";
import Naturaleza from "./components/Naturaleza/Naturaleza";
import Informacion from "./components/Informacion/Informacion";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Zona from "./components/Zona.jsx/Zona";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Encabezado */}
                <Header />
                
                {/* Contenido principal */}
                <div className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Contenido />
                                    <Informacion />
                                    <Naturaleza />
                                </>
                            }
                        />
                        <Route path="/products" element={<ItemList />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                        <Route path="/contact" element={<Contacto />} />
                        <Route path="/historia" element={
                        <>
                            <Historia />
                            <Zona />
                        </>
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} /> 
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};