import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

const BlogCard = ({ data }) => {
    const post = data
    const image = getImage(post.frontmatter.image)
    const title = post.frontmatter.title || post.fields.slug

    return (
        <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <GatsbyImage
                    style={{
                        borderRadius: '7px 7px 0px 0px',
                        height: '344px'
                    }}
                    image={image}
                    alt={` `} />
                <small>{data.frontmatter.date}</small>
                <h2>
                    <Link to={data.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                    </Link>
                </h2>
            </header>
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.frontmatter.description || data.excerpt,
                    }}
                    itemProp="description"
                />
            </section>
        </article>
    )
}

export default BlogCard
