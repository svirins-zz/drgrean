import React from "react"

export const Contact = (): JSX.Element => {
  return (   
    <>     
  <section className="relative block pb-20 bg-gray-900">
    <div
      className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
      style={{ height: "80px", transform: "translateZ(0)" }}
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
          className="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

  <div className="lg:pt-24 lg:pb-64 container px-4 mx-auto">
    <div className="flex flex-wrap justify-center mt-12">
      
    </div>
  </div>
  </section>
  <section className="lg:pt-0 relative block py-24 bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="lg:-mt-64 flex flex-wrap justify-center -mt-48">
        <div className="lg:w-6/12 w-full px-4 mt-12">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full px-4">
              <h2 className="text-4xl font-semibold text-white">
                Contact US
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                Put the potentially record low maximum sea ice extent tihs year down to low ice.
                According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full px-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="mt-5 text-xl font-semibold text-white">
                Facebook
              </h6>
            </div>
            <div className="lg:w-6/12 w-full px-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h6 className="mt-5 text-xl font-semibold text-white">
                Viber
              </h6>
            </div>
            <div className="lg:w-6/12 w-full px-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-white">
                Telegram
              </h5>
            </div>
            <div className="lg:w-6/12 sm:mb-12 md:mb-12 w-full px-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-white">
                E-mail
              </h5>
            </div>
          </div>  
        <div className="lg:w-6/12 w-full px-4">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg">
            <div className="lg:p-10 flex-auto p-5">
              <h4 className="text-2xl font-semibold">
                Want to work with us?
              </h4>
              <p className="mt-1 mb-4 leading-relaxed text-gray-600">
                Complete this form and we will get back to you in 24 hours.
              </p>
              <div className="relative w-full mt-8 mb-3">
                <label
                  className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="focus:outline-none focus:shadow-outline w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow"
                  placeholder="Full Name"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  htmlFor="tel"
                >
                  Email
                </label>
                <input
                  type="tel"
                  className="focus:outline-none focus:shadow-outline w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow"
                  placeholder="Phone"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="focus:outline-none focus:shadow-outline w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  cols="80"
                  className="focus:outline-none focus:shadow-outline w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow"
                  placeholder="Type a message..."
                />
              </div>
              <div className="mt-6 text-center">
                <button
                  className="active:bg-gray-700 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>)
};
