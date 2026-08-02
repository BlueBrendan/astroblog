import ContactForm from "./ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Form",
    description: "Brendan Chou's astrophotography portfolio featuring deep-sky objects like the Andromeda Galaxy, Orion Nebula, Rho Ophiuchi, and the North America Nebula, as well as wide-field milky way and landscape images",
};

export default function Contact() {
    return (
        <ContactForm/>
    )
}