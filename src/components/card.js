import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

const BlogCard = ({ data }) => {
    const post = data
    const image = getImage(post.node.frontmatter.image)
    const title = post.node.frontmatter.title || post.node.fields.slug

    return (
        <div className="card-list-item">
            <Link to={data.node.fields.slug} itemProp="url">
                <div className="card-header">
                    <GatsbyImage
                        style={{
                            borderRadius: '7px 7px 0px 0px',
                            height: '344px'
                        }}
                        image={image}
                        alt={title} />
                </div>
                <div className="card-body">
                    <small>{data.node.frontmatter.date}</small>
                    <h2>
                        <span itemProp="headline">{title}</span>
                    </h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.node.excerpt || data.node.frontmatter.description,
                        }}
                        itemProp="description"
                    />
                </div>
            </Link>
        </div >
    )
}

export default BlogCard
