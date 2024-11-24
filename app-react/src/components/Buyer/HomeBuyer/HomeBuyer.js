import { Outlet, useNavigate } from "react-router";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import HeaderBuyer from "../HeaderBuyer/HeaderBuyer";
import ProductPage from "../Products/ProductPage";
import { Routes, Route} from "react-router-dom";
import "./HomeBuyer.css";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";


function HomeBuyer({ search }){
   
    return(
       <>
          <HeaderBuyer></HeaderBuyer>

          <Routes>
            <Route index element={<FeaturedProducts search={search}/>}/>
            <Route path="product/:productId" element={<ProductPage />}/>
          </Routes>

          <Outlet />
       </>
    );
}

export default HomeBuyer;