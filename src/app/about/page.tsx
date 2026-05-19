import Hero from "../../components/Hero";
import React from "react";
import image from "../../../public/about-image.jpg";
import heroImage from "../../../public/hero-image.jpg";
import placeholder from "../../../public/placeholder.png";
import principal from "../../../public/principal.jpg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Hero
        title="About Us"
        description="Discover our story, our mission, and what sets us apart. We strive to create value and bring ideas to life through everything we do."
        image={image}
      />

      <div className="w-full flex items-center justify-center lg:mt-36 mt-12">
        <div className="xl:w-[85rem] w-full md:px-6 px-3 flex flex-col items-center lg:gap-36 gap-12">

          <div className="flex items-start lg:flex-row flex-col gap-12 w-full">
            <div className="lg:w-1/2 w-full">
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold text-blue-600">
                About Namuna
              </h2>
              <p className="xl:text-base md:text-sm text-xs mt-6 text-gray-700">
                Established in 2082 B.S., Namuna Multilingual Academy is a growing institution dedicated to fostering language proficiency and holistic learning in a supportive and forward-looking environment. With a focus on empowering students through communication, creativity, and critical thinking, the academy aims to prepare learners for opportunities in an increasingly connected world.
                <br /> <br />
                At Namuna Multilingual Academy, we specialize in multilingual education, combining modern teaching methods with experienced instructors to ensure effective and engaging learning experiences. Our commitment goes beyond language skills—we strive to build confidence, cultural awareness, and practical knowledge that help students succeed both academically and professionally.
              </p>
            </div>
            <Image
              className="lg:w-1/2 w-full h-[28rem] object-cover rounded-xl"
              src={heroImage}
              alt={placeholder.src}
            />
          </div>

          <div className="flex items-start lg:flex-row flex-col-reverse gap-12 w-full">
            <Image
              className="lg:w-1/2 w-full h-[28rem] object-cover rounded-xl"
              src={principal}
              alt={placeholder.src}
            />
            <div className="lg:w-1/2 w-full">
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold text-blue-600">
                Our Mission
              </h2>
              <p className="xl:text-base md:text-sm text-xs mt-6 text-gray-700">
                Our mission is to empower learners with strong multilingual skills, confidence, and a global perspective that prepares them for real-world opportunities. We are dedicated to creating an engaging and inclusive learning environment where students can develop communication abilities, critical thinking, and cultural understanding.

                Through innovative teaching methods and a student-centered approach, we strive to nurture individuals who are not only academically capable but also adaptable, creative, and ready to succeed in an ever-evolving world.
              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}