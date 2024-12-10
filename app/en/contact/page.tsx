"use client";

import UserNavigation from "@/components/UserNavigationEN";
import { IoPhonePortraitOutline, IoMailUnreadOutline, IoLogoLinkedin, IoLogoInstagram, IoArrowDownOutline } from "react-icons/io5";

export default function Home() {
  
  return (
    <>
      <UserNavigation />
      <section className="overflow-hidden bg-gray-100 grid min-h-screen items-center pt-16">
        <div className="grid sm:grid-cols-3 h-full text-gray-800">
          <div className="space-y-4 mt-28 sm:pl-80 sm:block hidden">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex items-center space-x-2">
              <IoPhonePortraitOutline size={24} />
              <p className="text-lg">+48 535-003-898</p>
            </div>
            <div className="flex items-center space-x-2">
              <IoMailUnreadOutline size={24} />
              <p className="text-lg">filiprozniak@wp.pl</p>
            </div>
          </div>
          <div className="text-center space-y-6 sm:col-span-1 sm:block hidden">
            <h2 className="text-2xl md:text-4xl font-bold">Contact me!</h2>
          </div>
          <div className="space-y-4 text-right mt-28 sm:pr-80 sm:block hidden">
            <h3 className="text-xl font-bold">Social medias</h3>
            <div className="flex items-center justify-end space-x-2">
              <IoLogoLinkedin size={24} />
              <a
                href="https://www.linkedin.com/in/filip-ro%C5%BCniak-a00884328/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <IoLogoInstagram size={24} />
              <a href="https://www.instagram/filip.rozniak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-600 transition-colors"
              >
                Instagram
                </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden text-center space-y-8">
          <h2 className="text-2xl font-bold">Contact me!</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex items-center justify-center space-x-2">
              <IoPhonePortraitOutline size={24} />
              <p className="text-lg">+48 535-003-898</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <IoMailUnreadOutline size={24} />
              <p className="text-lg">filiprozniak@wp.pl</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Social medias</h3>
            <div className="flex items-center justify-center space-x-2">
              <IoLogoLinkedin size={24} />
              <a
                href="https://www.linkedin.com/in/filip-ro%C5%BCniak-a00884328/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <IoLogoInstagram size={24} />
              <a
                href="https://www.instagram.com/filip.rozniak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-600 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}