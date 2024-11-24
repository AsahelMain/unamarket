import { useAuth } from "../../hooks/useAuth";
function Landing() {
    const { user } = useAuth()
    console.log(user);
    return <h1>Landing page</h1>
}

export default Landing;