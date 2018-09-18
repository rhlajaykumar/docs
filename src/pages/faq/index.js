import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/layouts/default'
import FAQ from '../../components/faq'

const FAQPage = ({ data }) => {
    const posts = data.allGhostPost.edges
    return (
        <Layout title="FAQ">
            <div className="mw-xl center">
                <div className="flex flex-column pa12 pt10 bg-white br4">
                    <h1 className="ma0 mb6 f4">Frequently Asked Questions</h1>
                    {posts.map(({ node }) => (
                        <FAQ key={node.id} post={node} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

FAQPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQPage

export const pageQuery = graphql`
  query GhostFAQQuery {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: 50,
        filter: {primary_tag: {slug: {eq: "faq"}}}
    ) {
      edges {
        node {
          id
          slug
          title
          custom_excerpt
          plaintext
          publishedAt: published_at(formatString: "DD MMMM, YYYY"),
          primaryTag: primary_tag {
            name
            slug
          }
          authors {
            name slug
          }
        }
      }
    }
  }
`
