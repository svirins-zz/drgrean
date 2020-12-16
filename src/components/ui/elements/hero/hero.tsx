import React from "react";
import tw from "twin.macro";

const Container = tw.section`container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center`;
const SubContainer = tw.div`lg:w-1/2 flex flex-col items-center lg:items-start`;
const Header = tw.h1`text-center lg:text-left text-3xl sm:text-5xl font-light text-blue-700 leading-tight mb-4`;
const Strong = tw.strong`font-black text-3xl sm:text-4xl block`;
const Paragraph = tw.p`text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed`;
const Link = tw.a`bg-blue-400 hover:bg-blue-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest`;
const SvgContainer = tw.div`w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8`

export const Hero = (): JSX.Element => {
  return (
    <Container>
      <SubContainer>
        <Header>
          Our recruiting strategy<Strong>hit your hiring plan</Strong>
        </Header>
        <Paragraph>
          You must be able to convey information via phone, email, and in
          person. You want to make sure your tone is always professional but
          friendly
        </Paragraph>
        <Link href="#">Aplly now</Link>
        <div className="lg:mt-24 flex mt-16">
          <span className="w-12 h-1 mx-1 bg-blue-400"></span>
          <span className="w-12 h-1 mx-1 bg-blue-200"></span>
          <span className="w-12 h-1 mx-1 bg-blue-200"></span>
        </div>
      </SubContainer>
    </Container>
  );
};


    <div className="lg:mt-24 flex mt-16">
      <span className="w-12 h-1 mx-1 bg-blue-400"></span>
      <span className="w-12 h-1 mx-1 bg-blue-200"></span>
      <span className="w-12 h-1 mx-1 bg-blue-200"></span>
    </div>
  </div>
  <div class="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8"></div>
</div>;
