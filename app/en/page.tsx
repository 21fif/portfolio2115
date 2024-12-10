import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import UserNavigation from "@/components/UserNavigationEN";

export default function Home() {
  return (
    <>
      <UserNavigation />
      <section className="overflow-hidden bg-gray-100 grid grid-rows-[1fr_auto] min-h-screen items-center">
        <div className="grid sm:grid-cols-2 h-full items-center justify-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center ltr:sm:text-left rtl:sm:text-right sm:mr-8">
            <h1 className="text-4xl text-gray-800 font-bold md:text-5xl">
                Hey!
              </h1>
              <h1 className="text-4xl text-gray-800 font-bold md:text-5xl">
                My name is Filip
              </h1>
              <h1 className="text-2xl text-gray-800 md:mt-4 md:text-3xl">
                Frontend developer
              </h1>

              <h2 className="text-gray-800 mt-4 md:mt-8 md:block">
                I value aesthetics and simplicity, but I am open to various styles. Take a look at what I have managed to create!
              </h2>
              
              <div className="mt-2 md:mt-4">
                
                <Link
                  href="/en/projects"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-gray-400 border-2 border-black"
                >
                  See my projects!
                </Link>
              </div>

              <h3 className="text-gray-800 mt-4 md:mt-8 md:block">
                Frontend developer with a passion for aesthetic and thoughtful solutions. I continuously develop my skills, striving for professionalism in every project.
              </h3>

              <div className="mt-2 md:mt-4">
                <Link
                  href="/en/about"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-gray-400 border-2 border-black"
                >
                  More about me!
                </Link>
              </div>

            </div>
          </div>
          <div className="relative mx-auto w-[90%] max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
            <Image
              alt="Photo"
              priority
              src="/fifson.jpeg"
              width={600} 
              height={800} 
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}