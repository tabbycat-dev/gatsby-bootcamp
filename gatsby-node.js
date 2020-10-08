const path = require('path')
//Goal 1: create slug for all blog posts 
//gatsby.md -> gatsby using "path" by nodeJS
//using onCreateNode to add fields/slug node 


//Goal 2: generate blog post page template (create template folder under src)

//Goal 3: generate new page for each post (using 'createPages')

module.exports.createPages = async ({ graphql, actions }) => { 
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //1.get path to template
    //2.get markdown data
    //3.create new pages
    const res = await graphql(`
      query {
        allContentfulBlogPost(
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      })
    })      
}