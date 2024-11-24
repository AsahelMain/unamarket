import { Outlet } from "react-router";
import HeaderSeller from "../HeaderSeller/HeaderSeller";
import UpdateProduct from "./UpdateProduct";
import { Routes, Route} from "react-router-dom";


function UpdateProductPage({ seller_id }){
    return(
       <>
          <HeaderSeller></HeaderSeller>
          <UpdateProduct seller_id={seller_id}/>
       </>
    );
}

export default UpdateProductPage;
