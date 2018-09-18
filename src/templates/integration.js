import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layouts/default'

import integrationIcon from '../images/integration-icon.png'

const Integration = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="h8 w8 pa8 bg-white br-100 shadow-3 nl2 nr2">
                    <img src={post.feature_image} alt={post.title} />
                </div>
                <div className="h8 w8 pa9 bg-white br-100 shadow-3 nl2 nr2">
                    <img src={integrationIcon} alt="Ghost" />
                </div>
            </div>
            <div className="flex mw9 mt10 center">
                <div className="pa15 pt13 bg-white br4">
                    <Link className="link blue" to="/integrations/">Integrations</Link> / {post.title}
                    <h1>{post.title}</h1>
                    <section className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    )
}

Integration.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Integration

export const articleQuery = graphql`
    query IntegrationQuery($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
          title
          custom_excerpt
          feature_image
          plaintext
          html
          publishedAt: published_at(formatString: "DD MMMM, YYYY")
          primaryTag:primary_tag{
            name
            slug
          }
          authors {
             name
             slug

          }
        }
    }
`
