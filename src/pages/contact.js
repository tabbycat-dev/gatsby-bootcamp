import React from 'react'
import Head from "../components/head"
import Layout from "../components/layout"
import InstagramPost from "../components/media"
const ContactPage = () => {
    return (
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          The best way to reach me is via{" "}
          <a href="https://twitter.com/@andrew_j_mead" target="_blank">
            @andrew_j_mead
          </a>{" "}
          on Twitter!
          
          <InstagramPost/>
        </p>


        
      </Layout>
    )
}

export default ContactPage