import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => {
    const data = useStaticQuery(graphql`
      query {
        allInstagramContent(limit: 12) {
          edges {
            node {
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              media_url
              caption
            }
          }
        }
      }
    `)
  
  
    return (
      <div>
        {data.allInstagramContent.edges.map((item, i) =>
          item.node.localImage.childImageSharp ? (
            <div key={i}>
              <h2>{item.node.caption}</h2>
              <Image fluid={item.node.localImage.childImageSharp.fluid} />
            </div>
          ) : (
            <div>
              <h2>** Video here {item.node.caption}</h2>
            </div>
          )
        )}
      </div>
    )
}

export default Instagram