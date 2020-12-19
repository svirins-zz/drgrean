import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import React from 'react';

export const Authors = (): JSX.Element => {
  const { allContentfulAuthor } = useStaticQuery(graphql`
    query {
      allContentfulAuthor {
        nodes {
          name
          slug
          social
          avatar {
            fluid(maxWidth: 480) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          personal_info {
            childMarkdownRemark {
              html
            }
          }
          post {
            slug
            title
            excerpt
          }
        }
      }
    }
  `
)
const authorsDisplay = allContentfulAuthor.nodes.map((author, index) => {
  return (
    <div 
      key={index} 
      className='md:w-6/12 lg:w-6/12 lg:mb-0 w-full px-4 mb-12'
    >
      <div className='px-6'>
        <Img
          key={index}
          alt={author.name}
          fluid={author.avatar.fluid}
          className='max-w-full mx-auto rounded-full shadow-lg'
          style={{ maxWidth: '480px' }}
        />
        <div className='pt-6 text-center'>
        <h5 className='text-xl font-bold'>{author.name}</h5>
        <p className='mt-1 text-sm font-semibold text-gray-500 uppercase'>
          Post count{" "}{author.post.length}
        </p>
        <p className='mt-1 text-sm font-semibold text-gray-500 uppercase'>
          {author.personal_info.childMarkdownRemark.html.substr(0, 100)}
        </p>
      </div>
    </div>
  </div>
  )
})

	return (
    <section className="bg-gray-300">
      <section className="relative py-20">
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className='pt-20 pb-48'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap justify-center mb-24 text-center'>
            <div className='lg:w-6/12 w-full px-4'>
              <h2 className='text-4xl font-semibold'>Our authors</h2>
              <p className='m-4 text-lg leading-relaxed text-gray-600'>
                Some text about authors ...........
              </p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {authorsDisplay}
          </div>
        </div>
      </section>
    </section>
	);
};





