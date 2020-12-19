import url from "assets/hero.jpg"
import React from "react";
export const Hero = (): JSX.Element => {
  return (
    <div className="relative flex items-center content-center justify-center pt-16 pb-32"
    style={{
      minHeight: "75vh"
    }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${url})`
      }}>
    <span id="blackOverlay" className="bg-nord1 absolute w-full h-full opacity-75"></span>
  </div>
  <div className="container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="lg:w-6/12 w-full px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className="text-5xl font-semibold text-pink-600">
              Your story starts with us.
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              This is a simple example of a Landing Page you can build
              using Tailwind Starter Kit. It features multiple CSS
              components based on the Tailwindcss design system.
            </p>
          </div>
        </div>

      </div>
  </div>
  <div
    className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
    style={{ height: "70px", transform: "translateZ(0)" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>
  );
};
