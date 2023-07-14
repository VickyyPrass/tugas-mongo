import Input from "../../Components/Input";
import { useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tambah = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const data = {
            name,
            price,
            stock,
            status,
        };

        try {
            await axios.post("http://localhost:5000/product", data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main">
            <div className="card">
                <h2>Tambah Produk</h2>
                <br />
                <form onSubmit={saveProduct}>
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
                        label="Stok"
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
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Tambah;
