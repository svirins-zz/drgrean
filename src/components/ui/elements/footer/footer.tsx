import footerSvg from "assets/footer.svg"
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Container = tw.footer`relative bg-gray-300 pt-8 pb-6`;
const SvgContainer = styled.div`
  ${tw`absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none`};
  height: 80px;
  transform: translateZ(0);
`;
const SubContainer = tw.div`container px-4 mx-auto`
const TopContainer = tw.div`flex flex-wrap`
const BottomContainer = tw.div`md:justify-between flex flex-wrap items-center justify-center`

const SocialsContainer = tw.div`lg:w-8/12 w-full px-4`
const H4 = tw.h4`text-3xl font-semibold`;
const H5 = tw.h4`mt-0 mb-2 text-lg text-gray-700`;
const FooterMenuContainer = tw.div`lg:w-4/12 w-full px-4`
const HR = tw.hr`my-6 border-gray-400`;

// TODO: add social icons to buttons
export const Footer = (): JSX.Element => {
  return (
    <Container>
      <SvgContainer>
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
      </SvgContainer>
      <SubContainer>
        <TopContainer>
          <SocialsContainer>
            <H4>Sub header</H4>
            <H5>Find us on any of these platforms, we respond 1-2 business days.</H5>
            <div className="mt-6">
              <button
                className="align-center focus:outline-none items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-600 bg-white rounded-full shadow-lg outline-none"
                type="button"
              >
              </button>
              <button
                className="align-center focus:outline-none items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none"
                type="button"
              >
              </button>
            </div>
          </SocialsContainer>
          <FooterMenuContainer>
          <ul className="list-unstyled">
            <li>
              <a className="hover:text-gray-900 block pb-2 text-sm font-semibold text-gray-700"
              href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
            </a>
            </li>
            <li>
              <a className="hover:text-gray-900 block pb-2 text-sm font-semibold text-gray-700"
                  href="https://creative-tim.com/terms">Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 block pb-2 text-sm font-semibold text-gray-700"
                  href="https://creative-tim.com/privacy">Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 block pb-2 text-sm font-semibold text-gray-700"
                  href="https://creative-tim.com/contact-us">Contact Us
              </a>
            </li>
          </ul>

          </FooterMenuContainer>
        </TopContainer>
        <HR />
        <BottomContainer>
            <div className="md:w-4/12 w-full px-4 mx-auto text-center">
              <div className="py-1 text-sm text-gray-600">
                Copyright © {new Date().getFullYear()}{" "}Made with{" "}
                <span role="img" aria-labelledby="love">
                  ❤️{" "}by{" "}
                </span>
                <a
                  href="https://twitter.com/svirins"
                  className="hover:text-gray-900 text-gray-600"
                >
                  @Svirins
                </a>
              </div>
            </div>
        </BottomContainer>
      </SubContainer>
    </Container>
  );
};
















