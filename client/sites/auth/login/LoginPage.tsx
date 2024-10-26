import Login from "../../../components/auth/login/LogIn";
import { Navbar } from "../../../components/globals";
const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div>
                <Login />
            </div>
        </>
    );
};

export default LoginPage;
