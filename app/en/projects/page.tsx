"use client";

import UserNavigation from "@/components/UserNavigationEN";
import PhotoGalleryEN from "@/components/PhotoGalleryEN";

export default function Home() {
  return (
    <>
      <UserNavigation />
      <section className="bg-gray-100 grid grid-rows-[1fr_auto] min-h-screen">
        <div className="pt-12 p-6 md:pt-16 md:p-8 xl:pt-20 xl:px-16 xl:py-8">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Work
            </h2>
            <p className="text-gray-800 mt-2">
              Click on the image to see and learn more!
            </p>
          </div>
        </div>
        <div className="p-4 md:p-6 xl:pt-4">
          <PhotoGalleryEN />
        </div>
      </section>
    </>
  );
}