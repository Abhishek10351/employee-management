import SignUp from "../../../components/auth/signup/SignUp";
import { Navbar } from "../../../components/globals";
export default function SignUpPage() {
    return (
        <>
            <Navbar />
            <div>
                <SignUp />
            </div>
        </>
    );
}
