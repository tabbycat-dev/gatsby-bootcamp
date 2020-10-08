import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Head from "../components/head"
import Layout from '../components/layout'
import blogStyles from "./blog.module.scss"

//Goal: link to blog post page
//1. fetch slug for posts
//2. use slug to generate a link to the post page
const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(
          sort: { fields: publishedDate, order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              node_locale
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)
    console.log(data)

    return (
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge, key) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2> {edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    )

}
export default BlogPage