import "./Registration.scss";
import { EmployeeRegistration } from "../../../components/employees";
import { Navbar } from "../../../components/globals";
export default function Registration() {
    return (
        <>
            <Navbar />
            <main className="registration-container">
                <EmployeeRegistration />
            </main>
        </>
    );
}
