import { Layout, SEO } from "components/layout";
import React from "react";
import tw from "twin.macro";

const Custom404 = (): JSX.Element => {
  return (
    <Layout>
<div className="flex items-center w-screen h-screen bg-gray-100">
	<div className="md:flex-row container flex flex-col items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		<div className="font-dark text-5xl font-bold">404</div>
            <p
              className="md:text-3xl text-2xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <button className="focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700 inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow">back to homepage</button>
    </div>
      <div className="max-w-lg">
      
    </div>
    
  </div>
</div>
    </Layout>
  );
};

export default Custom404;
 