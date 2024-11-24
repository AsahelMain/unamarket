import './LoginMenu.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

function LoginMenu() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = { email: username, password: password };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const response_data = await response.json();
      const userRole = response_data.type;
      const id = response_data.id;

      console.log(response_data.tipo);

      if (response.ok) {
        console.log(response);
        login({ username, userRole, id});
      } else {
        console.log(response_data.error);
        setMessage(response_data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error. Por favor intenta ingresar más tarde')
    }
  };

  return (
    <>
      <div className="login-menu">
        <div className="login-card">
            <h2>Ingresar</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <label htmlFor="username">Correo</label>
                <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} required/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} required/>
                </div>
                <button type="submit">Ingresar</button>
            </form>
            <div className="login-signup">
              <p>¿Aún no tienes una cuenta?</p>
              <Link to="/signup"><p>Registrarse</p></Link>
            </div>
        </div>
      </div>
      {message && <div className="login-message"><div className='error-message'>{message}</div></div>}
    </>
  );
}

export default LoginMenu;
