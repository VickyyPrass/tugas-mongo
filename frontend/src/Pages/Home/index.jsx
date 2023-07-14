import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

const Home = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get("http://localhost:5000/product");
        setProduct(response.data);
    };
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/product/${id}`);
            getProduct();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main">
            <Link to="/tambah" className="btn btn-primary">
                Tambah Produk
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th className="text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((product, index) => {
                            return (
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td className="text-center">
                                        <Link
                                            to={`/detail/${product._id}`}
                                            className="btn btn-sm btn-info"
                                        >
                                            Detail
                                        </Link>
                                        <Link
                                            to={`/edit/${product._id}`}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-danger"
                                            onClick={() =>
                                                deleteProduct(product._id)
                                            }
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
