import { ReactNode } from "react"
import Hero from "../(home)/components/Hero"
import image from "../../../public/hero-image.jpg";

const ContactLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Hero
                image={image}
                title="Get In Touch"
                description=" We're here to answer your questions and help you learn more about Us. Reach out to us anytime!"
            />

            <div className="w-full flex items-center justify-center mt-12">
                <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-center gap-6">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ContactLayout