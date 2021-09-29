import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/card'

const BlogListTemplate = ({ data, location, pageContext }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.edges

    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title="All posts" />
                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the
                    directory you specified for the "gatsby-source-filesystem" plugin in
                    gatsby-config.js).
                </p>
            </Layout>
        )
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" />
            <div className="card-container">
                {posts.map(post => {
                    // console.log(post);
                    // const image = getImage(post.node.frontmatter.image);
                    // const title = post.node.frontmatter.title || post.node.fields.slug;
                    return (
                        <BlogCard key={post.node.fields.slug} data={post} />
                    )
                })}
            </div>
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    listStyle: 'none',
                    padding: 0,
                }}
            >
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        ← Previous Page
                    </Link>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <li
                        key={`pagination-number${i + 1}`}
                        style={{
                            margin: 0,
                        }}
                    >
                        <Link
                            to={`/${i === 0 ? '' : i + 1}`}
                            style={{
                                textDecoration: 'none',
                                color: i + 1 === currentPage ? '#ffffff' : '',
                                background: i + 1 === currentPage ? '#007acc' : '',
                            }}
                        >
                            {i + 1}
                        </Link>
                    </li>
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                )}
            </ul>
        </Layout>
    )
}

export default BlogListTemplate

export const pageQuery = graphql`
query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            image {
                childImageSharp {
                    gatsbyImageData
                }
            }
          }
        }
      }
    }
  }
`
