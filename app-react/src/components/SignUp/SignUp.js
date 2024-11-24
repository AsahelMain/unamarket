import "../../App.css";
import Header from "../Header/Header";
import SignUpMenu from "./SignUpMenu";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

function SignUp() {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if(user !== null){
          navigate('/welcome');
        }
    }, [navigate, user]); 

    return(
        <div className="App">
            <Header />
            <SignUpMenu />
        </div>
    );
}

export default SignUp;