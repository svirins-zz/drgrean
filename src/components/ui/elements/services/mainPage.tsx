import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

export const MainPage = (): JSX.Element => {
	return (
    <>
    <section className="pb-20 -mt-24 bg-gray-300">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap">

        <div className="md:w-4/12 w-full px-4 text-center">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">Awarded Agency</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-4/12 w-full px-4 text-center">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-400 rounded-full shadow-lg">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">
                Free Revisions
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-4/12 w-full px-4 text-center">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-green-400 rounded-full shadow-lg">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">
                Verified Company
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap items-center mt-24">
        <div className="md:w-6/12 w-full px-4 ml-auto mr-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves
            to any element. Just make sure you enable them first via
            JavaScript.
          </p>
          <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
            The kit comes with three pre-built pages to help you get
            started faster. You can change the text and images and
            you're good to go. Just make sure you enable them first via
            JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            className="mt-8 font-bold text-gray-800"
          >
            Check Tailwind Starter Kit!
          </a>
        </div>

        <div className="md:w-6/12 w-full px-4 ml-auto mr-auto">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-pink-600 rounded-lg shadow-lg">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 block w-full"
                style={{
                  height: "95px",
                  top: "-94px"
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Services
              </h4>
              <p className="text-md mt-2 font-light text-white">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  </>
	);
};
