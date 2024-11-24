import "./SearchResults.css";
import frog from "../../../assets/frog.jpeg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ImageDecoder from '../../../utils/ImageDecoder/ImageDecoder';

function SearchResults() {
  const location = useLocation();
  const toSearch = location.state && location.state.toSearch;
  const encodedQuery = encodeURIComponent(toSearch);

  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/products/search?query=${encodedQuery}`);
        const data = await response.json();

        if (response.ok) {
          setSearchResult(data);
          setError("");
        } else {
          setError(data.error);
          setSearchResult([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error al buscar productos.");
        setSearchResult([]);
      }
    };

    fetchData(); // Llama a la función fetchData al montar el componente
  }, [encodedQuery]); // Dependencia para ejecutar useEffect cuando la variable encodedQuery cambie

  return (
    <div className="featured">
      <div className="featured-container">
        {!error && <h2>Resultados para : {toSearch}</h2>}
        <div className="product-list">
          {error && <h3 className="error-message">Error: {error.message}</h3>}

          {searchResult?.map((product) => (
            <Link key={product.product_id} className="product-card" to={`product/${product.product_id}`}>
              <ImageDecoder base64Image={product.photo}/>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

