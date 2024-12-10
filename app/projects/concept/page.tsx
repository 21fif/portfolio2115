"use client";

import UserNavigation from "@/components/UserNavigation";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <UserNavigation />
      <section className="bg-gray-100 min-h-screen">
        <div className="px-6 py-8 sm:px-12 lg:px-24">
          <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px]">
            <Image
              alt="Główny obraz projektu"
              src="/concept/concept.jpg"
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-4">Koncept sklepu z butami</h1>
          <p className="text-gray-800 font-bold text-lg">
          To koncepcja strony internetowej sklepu z butami, zaprojektowana w Figmie, 
          </p>
          <p className="text-gray-800 font-bold text-lg">
          która obejmuje wszystkie kluczowe funkcje potrzebne do stworzenia kompletnej platformy e-commerce. 
          </p>
          <p className="text-gray-800 mt-4 text-base">
          Głównym celem projektu było stworzenie funkcjonalnego i estetycznego konceptu, 
          </p>
          <p className="text-gray-800 text-base">
          który może być inspiracją lub podstawą do wdrożenia pełnowartościowego sklepu internetowego.
          </p>
          <p className="text-gray-800 mt-4 text-base">
          Projekt został stworzony podczas stażu Web Application Developer.
          </p>
        </div>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <div key={index} className="px-6 py-8 sm:px-12 lg:px-24">  
            <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px]">
              <Image
                alt={`Obraz ${index}`}
                src={`/concept/concept${index}.jpg`}
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
