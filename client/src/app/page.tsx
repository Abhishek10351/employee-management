import { HomePage } from "../../sites";
import ProtectedRoute from "../../components/auth/protected/ProtectedRoute";
export default function Home() {
    return (
        <ProtectedRoute>
            <HomePage />
        </ProtectedRoute>
    );
}
