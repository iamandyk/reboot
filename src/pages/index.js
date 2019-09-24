import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Operation ReBoot Outdoors</h1>
    <p>
      I have a new mission to ReBoot alongside my brothers and sisters. Let's
      get the compass needle moving back toward true North.
    </p>

    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
