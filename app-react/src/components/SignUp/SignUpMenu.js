import './SignUpMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpMenu() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Comprador');
  const [message, setMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
        name: name,
        email: email,
        phone: phone,
        role: role
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const response_data = await response.json();

        if (response.ok) {
            console.log(response);
            setMessage("Registro completado exitosamente");
        } else {
            setMessage(response_data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        setMessage("Error. Por favor intenta ingresar más tarde");
    }

  };

  return (
    <>
      <div className="signup-menu">
        <div className="signup-card">
            <h2>Registro</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <label htmlFor="name">Nombre de usuario</label>
                <input type="text" id="name" name="name"  onChange={(event) => setName(event.target.value)}required/>
                </div>
                <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} required/>
                </div> 
                <div className="form-group">
                <label htmlFor="phone">Número de teléfono</label>
                <input type="tel" id="phone" name="phone" onChange={(event) => setPhone(event.target.value)} required/>
                </div> 
                <div className="form-group">
                    <label htmlFor="role">Rol</label>
                    <select id="role" name="role" value={role} onChange={(event) => setRole(event.target.value)} required>
                        <option value="comprador">Comprador</option>
                        <option value="vendedor">Vendedor</option>
                    </select>
                </div>
                
                <button type="submit">Registrarse</button>
            </form>
            <div className="signup-login">
              <p>¿Ya tienes una cuenta?</p>
              <Link to="/login"><p>Ingresar</p></Link>
            </div>
        </div>
      </div>
      {message && <div className="signup-message"><div className='error-message'>{message}</div></div>}
    </>
  );
}

export default SignUpMenu;
