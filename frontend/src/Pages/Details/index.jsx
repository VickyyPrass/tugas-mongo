import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const [idProduct, setID] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const { id } = useParams();

    useEffect(() => {
        getProductByID();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProductByID = async () => {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setID(response.data._id);
        setName(response.data.name);
        setPrice(response.data.price);
        setStock(response.data.stock);
    };

    return (
        <div className="main">
            <Link to="/" className="btn btn-primary">
                Kembali
            </Link>

            <table className="table">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>: {idProduct}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>: {name}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>: Rp. {price}</td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td>: {stock}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Detail;
