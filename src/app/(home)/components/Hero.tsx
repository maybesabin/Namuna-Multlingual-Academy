import React from "react";
import Image, { StaticImageData } from "next/image";

type ContactProps = {
    title: string;
    description: string;
    image: StaticImageData;
}

export default function contact({
    title,
    description,
    image }: ContactProps) {
    return (
        <div className="relative text-white w-full mb-12">
            <Image
                className="w-full h-[30svh] object-cover brightness-40"
                src={image}
                alt="Namuna Multilingual Academy"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 text-center">
                <h2 className="sm:text-4xl text-2xl font-bold mb-4">{title}</h2>
                <p className="md:text-sm text-xs lg:max-w-xl">
                    {description}
                </p>
            </div>
        </div>
    );
}
