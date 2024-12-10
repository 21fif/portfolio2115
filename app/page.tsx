import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import UserNavigation from "@/components/UserNavigation";

export default function Home() {
  return (
    <>
      <UserNavigation />
      <section className="overflow-hidden bg-gray-100 grid grid-rows-[1fr_auto] min-h-screen items-center">
        <div className="grid sm:grid-cols-2 h-full items-center justify-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center ltr:sm:text-left rtl:sm:text-right sm:mr-8">
            <h1 className="text-4xl text-gray-800 font-bold md:text-5xl">
                Cześć!
              </h1>
              <h1 className="text-4xl text-gray-800 font-bold md:text-5xl">
                Jestem Filip
              </h1>
              <h1 className="text-2xl text-gray-800 md:mt-4 md:text-3xl">
                Frontend developer
              </h1>

              <h2 className="text-gray-800 mt-4 md:mt-8 md:block">
                  Cenię estetykę i prostotę, ale jestem otwarty na różnorodne style. Zobacz, co udało mi się stworzyć!
              </h2>
              
              <div className="mt-2 md:mt-4">
                
                <Link
                  href="/projects"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-gray-400 border-2 border-black"
                >
                  Zobacz moje prace!
                </Link>
              </div>

              <h3 className="text-gray-800 mt-4 md:mt-8 md:block">
                  Frontend developer z pasją do estetycznych i przemyślanych rozwiązań. Stale rozwijam swoje umiejętności, dążąc do profesjonalizmu w każdym projekcie.
              </h3>

              <div className="mt-2 md:mt-4">
                <Link
                  href="/about"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-gray-400 border-2 border-black"
                >
                  Więcej o mnie!
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