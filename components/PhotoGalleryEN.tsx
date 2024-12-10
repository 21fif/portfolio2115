"use client";

import Image from "next/image";
import Link from "next/link";

const PhotoGallery: React.FC = () => {
  const images = [
    { src: "/marcin/marcin1.jpg", link: "/en/projects/forma" },
    { src: "/samurai/samurai1.jpg", link: "/en/projects/samurai" },
    { src: "/template/template1.jpg", link: "/en/projects/template" },
    { src: "/concept/concept.jpg", link: "/en/projects/concept" },
  ];

  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full">
            <Link href={image.link}>
              <Image
                alt={`Gallery image ${index + 1}`}
                src={image.src}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                className="rounded-2xl cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
