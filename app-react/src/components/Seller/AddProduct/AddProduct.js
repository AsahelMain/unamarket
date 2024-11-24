import './AddProduct.css'
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router";

function AddProduct(){
  const { seller_id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoBase64, setPhotoBase64] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const submitHandler = async(event) => {
      event.preventDefault();

      const data = {
	  seller_id: seller_id,
	  name: name,
	  description: description,
	  stock: parseInt(stock),
	  photo: photoBase64,
	  category: category,
	  price: parseFloat(price)
      }

      try{
	  const response = await fetch(`http://127.0.0.1:5000/api/products/addproduct/${seller_id}`, {
              method: 'POST',
	      headers:{
		  'Content-Type': 'application/json'
	      },
              body: JSON.stringify(data)
          });

	  const response_data = await response.json();

	  if (response.ok){
	      console.log(response);
	      setMessage("Registro completado"); //Envia a pagina buena
		  navigate(`/vender`);

	  } else {
	      setMessage(response_data.error);
	  }
      } catch (error){
	  console.error("Error:", error);
	  setMessage("Error. Por favor intenta más tarde"); //Mandar a pagina de rror
      }
  };

   const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result;
			const base64ContentIndex = base64String.indexOf(';base64,') + ';base64,'.length;
			if (base64ContentIndex !== -1) {
				const base64Content = base64String.substring(base64ContentIndex);
				setPhotoBase64(base64Content);
			} else {
				console.error("Error al obtener la imagen en formato base64");
			}
		};
		reader.onerror = () => {
			console.error("Error al cargar la imagen");
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

    return(
     <div className="add-menu">
	 <div className="add-card">
	     <h2>Publicar Producto</h2>
	    <form onSubmit={submitHandler}>
		<div className="form-group">
		    <label htmlFor="name">Nombre del producto:</label>
		    <input type="text" id="name" name="name" onChange={(event) => setName(event.target.value)}   />
		</div>
		<div className="form-group">
		    <label htmlFor="price">Precio:</label>
		    <input type="number" id="price" name="price" onChange={(event) => setPrice(event.target.value)} step="0.01" min="0"   />
		</div>
		<div className="form-group">
		    <label htmlFor="stock">Stock:</label>
		    <input type="number" id="stock" name="stock" onChange={(event) => setStock(event.target.value)}  min="1" step="1"  />
		</div>
		<div className="form-group">
		    <label htmlFor="category">Categoría:</label>
		    <input type="text" id="category" name="category" onChange={(event) => setCategory(event.target.value)}   />
		</div>
		<div className="form-group">
		    <label htmlFor="description">Características:</label>
		    <textarea rows="4" cols="50" id="description" name="description" onChange={(event) => setDescription(event.target.value)} ></textarea>
		</div>
		<div className="form-group">
		    <label htmlFor="photo">Foto:</label>
		    <input type="file" id="photo" name="photo" accept="image/*" onChange={handleFileChange}   />
		</div>
		<button type="submit">Publicar</button>
	    </form>
           </div>
        </div>

    );
}

export default AddProduct;
