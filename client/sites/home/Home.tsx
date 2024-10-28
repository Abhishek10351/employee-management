import { Navbar } from "../../components/globals";
import { Work, Faq, Hero } from "../../components/home";
export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Work />
            <Faq />
        </>
    );
}
