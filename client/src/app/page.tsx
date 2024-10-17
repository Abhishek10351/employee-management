// import Image from "next/image";
import { HomePage } from "../../sites";
import ProtectedRoute from "../../components/auth/protected/ProtectedRoute";
export default function Home() {
    // return <HomePage />;
    return (
        <ProtectedRoute>
            <HomePage />
        </ProtectedRoute>
    );
}
