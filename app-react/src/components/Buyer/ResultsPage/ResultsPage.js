import { Outlet } from "react-router";
import SearchResults from "../SearchResults/SearchResults";
import HeaderBuyer from "../HeaderBuyer/HeaderBuyer";
import ProductPage from "../Products/ProductPage";
import { Routes, Route} from "react-router-dom";


function ResultsPage({ search }){
    return(
       <>
          <HeaderBuyer></HeaderBuyer>

          <Routes>
            <Route index element={<SearchResults/>}/>
            <Route path="product/:productId" element={<ProductPage />}/>
          </Routes>

          <Outlet />
       </>
    );
}

export default ResultsPage;
