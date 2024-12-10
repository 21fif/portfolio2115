"use client";

import UserNavigation from "@/components/UserNavigationEN";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <UserNavigation />
      <section className="bg-gray-100 min-h-screen">
        <div className="px-6 py-8 sm:px-12 lg:px-24">
          <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px]">
            <Image
              alt="Main image"
              src="/marcin/marcin1.jpg"
              layout="responsive"
              width={800}
              height={400}
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>

        <div className="px-6 py-6 sm:px-12 lg:px-24 bg-gray-100 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-4">Zaktualizuj siebie!</h1>
          <p className="text-gray-800 font-bold text-lg">
            This website created to help people change their appearance and habits,
          </p>
          <p className="text-gray-800 font-bold text-lg">
          which are looking for change in their lives. It presents the offer and allows for sign-ups for collaboration.
          </p>
          <p className="text-gray-800 mt-4 text-base">
          The project uses React and Next.js to build dynamic pages, and Tailwind CSS for responsive styling
          </p>
          <p className="text-gray-800 text-base">
          The entire app has been optimized for performance and loading speed, with a focus on UX
          </p>
        </div>

        {[2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="px-6 py-8 sm:px-12 lg:px-24"> 
            <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px]">
              <Image
                alt={`Obraz ${index}`}
                src={`/marcin/marcin${index}.jpg`}
                layout="responsive"
                width={800}
                height={400}
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
