import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from './media.module.scss'

const Instagram = () => {
    const data = useStaticQuery(graphql`
      query {
        allInstaNode(limit: 12) {
          edges {
            node {
              caption
              localFile {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `)
  
  
    return (
      <div className={styles.instagram}>
        {data.allInstaNode.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i} className={styles.post}>
              <Image fluid={item.node.localFile.childImageSharp.fluid} />
            </div>
          ) : (
            <div>
              <h2>[** No image]</h2>
            </div>
          )
        )}
      </div>
    )
}

export default Instagram