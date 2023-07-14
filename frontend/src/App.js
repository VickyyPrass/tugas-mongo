import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Detail from "./Pages/Details";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Tambah from "./Pages/AddData";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/tambah" element={<Tambah />}></Route>
                    <Route path="/edit/:id" element={<Edit />}></Route>
                    <Route path="/detail/:id" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
