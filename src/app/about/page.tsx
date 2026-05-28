import heroImage from "../../../public/hero-image.jpg";
import placeholder from "../../../public/placeholder.png";
import principal from "../../../public/principal.jpg";
import Image from "next/image";
import PersonCard from "./components/PersonCard";

export default function page() {

  const teamMembers = [
    {
      name: "Aarav Shrestha",
      position: "Principal",
      imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      name: "Sanjana Koirala",
      position: "Academic Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
      name: "Ramesh Adhikari",
      position: "Shareholder",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Priya Gurung",
      position: "Administrative Officer",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "Bikash Thapa",
      position: "IT Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  return (
    <>
      {/* About Namuna */}
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
          className="lg:w-1/2 w-full h-112 object-cover rounded-xl"
          src={heroImage}
          alt={placeholder.src}
        />
      </div>

      {/* Our Mission  */}
      <div className="flex items-start lg:flex-row flex-col-reverse gap-12 w-full">
        <Image
          className="lg:w-1/2 w-full h-112 object-cover rounded-xl"
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

      {/* Our Team  */}
      <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold text-blue-600">
        Our Team
        <span className="block h-1 bg-blue-600 w-[40%] ml-auto"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-12 w-full lg:-mt-12">
        {teamMembers.map((member, index) => (
          <PersonCard
            key={index}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </>
  );
}