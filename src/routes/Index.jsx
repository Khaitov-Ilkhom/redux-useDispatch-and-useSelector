import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import NotFound from "./not-found/NotFound.jsx";
import Single from "./single/Single.jsx";
import Basket from "./basket/Basket.jsx";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/single/:id" element={<Single/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="not-found"/>}/>
        </Routes>
    )
}
export default Index
