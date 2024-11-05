import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../data/comercio";
import Loading from "../Loading/Loading";

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getProducts().then((data) => {
            const foundProduct = data.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <div>No se encontró el producto.</div>;
    }

    {/* Funciones para manejar el aumento y reduccion */}
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    {/*Precio total*/}
    const precioTotal = product.precio * quantity;

    return (
        <div className="max-w-lg mx-auto p-4">
            <img src={product.img} alt={product.name} className="w-full rounded-lg" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold mt-2">
                Precio: {product.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
            </p>
            <p className="text-sm mt-1">Stock: {product.stock}</p>

            {/* Contador de cantidad */}
            <div className="flex items-center mt-4">
                <button 
                    onClick={decrementQuantity} 
                    className="rounded-[5px] hover:bg-orange-500 hover:text-white w-12 border border-gray-300 text-lg flex justify-center items-center"
                >
                    -
                </button>
                <span className="text-lg px-4">{quantity}</span>
                <button 
                    onClick={incrementQuantity} 
                    className="rounded-[5px] hover:bg-orange-500 hover:text-white w-12 border border-gray-300 text-lg flex justify-center items-center"
                >
                    +
                </button>
            </div>
            <p className="text-lg mt-2">Precio Total: {precioTotal.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>

            <button
                onClick={() => navigate("/products")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Volver a la lista de productos...
            </button>
        </div>
    );
};
