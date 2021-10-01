import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

const BlogCard = ({ data }) => {
    const post = data
    const image = getImage(post.node.frontmatter.image)
    const title = post.node.frontmatter.title || post.node.fields.slug

    return (
        <div className="card-list-item">
            <div className="card-header">
                <GatsbyImage
                    style={{
                        borderRadius: '7px 7px 0px 0px',
                        height: '344px'
                    }}
                    image={image}
                    alt={` `} />
            </div>
            <div className="card-body">
                <small>{data.node.frontmatter.date}</small>
                <h2>
                    <Link to={data.node.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                    </Link>
                </h2>
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.node.frontmatter.description || data.node.excerpt,
                    }}
                    itemProp="description"
                />
            </div>
        </div>
    )
}

export default BlogCard
