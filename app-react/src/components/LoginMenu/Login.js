import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../../App.css';
import { useAuth } from '../../hooks/useAuth';
import Header from '../Header/Header';
import LoginMenu from './LoginMenu';

function Login() {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    useEffect(() => {
      if(user !== null){
        if(user.userRole == "buyer") {
          navigate('/comprar');
        } else {
          navigate('/vender'); // cambiar a /vender
        }
      }
    }, [navigate, user]); 

    return (
          <div className="App">
            <Header />
            <LoginMenu />
          </div>
    );
}

export default Login;
