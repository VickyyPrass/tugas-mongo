import Input from "../../Components/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProductByID();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProductByID = async () => {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
        setStock(response.data.stock);
        setStatus(response.data.status);
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        const data = {
            name,
            price,
            stock,
            status,
        };

        try {
            await axios.patch(`http://localhost:5000/product/${id}`, data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main">
            <div className="card">
                <h2>Edit Produk</h2>
                <br />
                <form onSubmit={updateProduct}>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nama Produk..."
                        label="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        name="price"
                        type="number"
                        placeholder="Harga Produk..."
                        label="Harga"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        name="Stock"
                        type="number"
                        placeholder="Stock Produk..."
                        label="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                    <Input
                        name="status"
                        type="checkbox"
                        label="Active"
                        value={status}
                        onChange={(e) => setStatus(e.target.checked)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
