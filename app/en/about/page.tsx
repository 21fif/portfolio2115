"use client";

import UserNavigation from "@/components/UserNavigationEN";
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
                Hey,
              </h2>
              <h2 className="text-xl text-gray-800 font-bold md:mt-4 md:text-2xl">
              My name is Filip and I'm 24yo.
              </h2>
              <p className="text-gray-800 md:mt-4 md:block">
              I study computer science and have been developing as a frontend developer for a year, specializing in TypeScript, JavaScript, and React.
              </p>
              <p className="text-gray-800 md:block">
              I am open to learning backend development because I believe that a variety of technologies enriches a programmer's perspective.
              </p>
              <p className="text-gray-800 md:block">
              I am convinced that with determination, I can achieve a lot and I always give my best.
              </p>
              <p className="text-gray-800 md:block">
              Outside of coding, I am interested in music and photography, which further supports my creativity. 
              </p>
              <div className="flex items-center md:mt-4">
              <a
                href="/CV_Filip_Rożniak_ENG.pdf"
                download="CV_Filip_Rożniak_ENG.pdf"
                className="font-bold hover:text-blue-600 transition-colors flex items-center"
              >
              <IoArrowDownOutline className="text-xl mr-1" />
              resume
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