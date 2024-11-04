import { Navbar } from "../../components/globals";
import { Work, Faq, Hero, Testimonial, Clients } from "../../components/home";
export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Work />
                <Testimonial />
                <Clients />
                <Faq />
            </main>
        </>
    );
}
