import { Outlet } from "react-router";
import HeaderSeller from "../HeaderSeller/HeaderSeller";
import AddProduct from "./AddProduct";
import { Routes, Route} from "react-router-dom";


function AddProductPage({ seller_id }){
    return(
       <>
          <HeaderSeller></HeaderSeller>
          <AddProduct seller_id={seller_id}/>
       </>
    );
}

export default AddProductPage;
