import { Navbar } from "../../components/globals";
import { Work, Faq, Hero, Testimonial } from "../../components/home";
export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Work />
                <Testimonial />
                <Faq />
            </main>
        </>
    );
}
