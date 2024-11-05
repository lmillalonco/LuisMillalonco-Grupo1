import { useState, useEffect } from "react";
import { getProducts } from "../../data/comercio";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        setLoading(true);
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(prod => prod.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto p-4 mt-16 cursor-pointer">
            <div className="mb-4">
                <label className="font-semibold mr-2 cursor-pointer">Filtrar por categoría:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 p-2 rounded bg-white hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                >
                        {/*opciones de filtrado*/}
                    <option value="all">Todos</option>
                    <option value="Decoración">Decoración</option>
                    <option value="Accesorio">Accesorio</option>
                    <option value="Gorros">Gorros</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Pieceras">Pieceras</option>
                    <option value="Ponchos">Ponchos</option>
                    <option value="Bufanda"></option>
                </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading ? (
                    <div className="flex items-center justify-center h-64 col-span-full">
                    Cargando productos...
                </div>
                ) : (
                    filteredProducts.length === 0 ? (
                        <div>No hay productos disponibles en esta categoría.</div>
                    ) : (
                        filteredProducts.map((prod) => (
                            <Link key={prod.id} to={`/item/${prod.id}`}>
                                <Item {...prod} />
                            </Link>
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default ItemList;

