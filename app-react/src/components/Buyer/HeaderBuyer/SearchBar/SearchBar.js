import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import searchicon from '../../../../assets/search-icon.png';


function SearchBar() {
    const [toSearch, setToSearch] = useState('');
    const navigate = useNavigate();

  // Función para manejar el envío del formulario
    const submitHandler = (event) => {
	event.preventDefault();
	navigate('/search-results', {state: {toSearch}});	
  };

  return (
    <form onSubmit={submitHandler}>
	<input type="text" value={toSearch} onChange={(event) => setToSearch(event.target.value)} placeholder="Buscar productos..." className="search-bar"/>
	<button type="submit">
	    <img src={searchicon} alt="Search Icon"/>
	</button>
    </form>
  );
}
export default SearchBar;
