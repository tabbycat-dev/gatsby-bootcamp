import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import InstagramPost from "../components/media"
import { Link } from "gatsby"

const Instagram = () => {
  return (
    <Layout>
      <Head title="Instagram Posts" />
      <h1>Instagram</h1>
      <Link to="https://www.instagram.com/tabby_eyes/" target="_blank">
        <InstagramPost />
      </Link>
    </Layout>
  )
}

export default Instagram
