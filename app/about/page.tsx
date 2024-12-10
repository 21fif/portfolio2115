"use client";

import UserNavigation from "@/components/UserNavigation";
import { IoArrowDownOutline } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
    <UserNavigation />
    <section className="overflow-hidden bg-gray-100 grid grid-rows-[1fr_auto] h-screen items-center">
        <div className="grid sm:grid-cols-1 h-full justify-center">
          <div className="p-8 md:p-12 lg:px-40 lg:py-24">
            <div className="mx-auto ltr:sm:text-left rtl:sm:text-right sm:mr-8">
              <h2 className="text-2xl text-gray-800 font-bold md:text-5xl">
                Hej,
              </h2>
              <h2 className="text-xl text-gray-800 font-bold md:mt-4 md:text-2xl">
              Nazywam się Filip Rożniak i mam 24 lata.
              </h2>
              <p className="text-gray-800 md:mt-4 md:block">
              Studiuję informatykę i od roku rozwijam się jako frontend developer, specjalizując się w TypeScript, JavaScript i React. 
              </p>
              <p className="text-gray-800 md:block">
              Jestem otwarty na naukę backendu, bo uważam, że różnorodność technologii wzbogaca spojrzenie programisty. 
              </p>
              <p className="text-gray-800 md:block">
              Jestem przekonany, że dzięki determinacji mogę osiągnąć naprawdę wiele i zawsze daję z siebie maksimum. 
              </p>
              <p className="text-gray-800 md:block">
              Poza kodowaniem interesuję się muzyką i fotografią, co dodatkowo wspiera moją kreatywność. 
              </p>
              <div className="flex items-center md:mt-4">
              <a
                href="/CV_Filip_Rożniak.pdf"
                download="CV_Filip_Rożniak.pdf"
                className="font-bold hover:text-blue-600 transition-colors flex items-center"
              >
              <IoArrowDownOutline className="text-xl mr-1" />
              Sprawdź moje CV!
              </a>
            </div>
            </div>
          </div>
              <div className="absolute top-30 right-0 hidden lg:block">
                <Image
                alt="Photo"
                priority
                src="/xd.jpeg"
                width={400}
                height={3000}
                className="object-cover rounded-bl-3xl"/>
              </div>
        </div>
      </section>
    </>
  );
}