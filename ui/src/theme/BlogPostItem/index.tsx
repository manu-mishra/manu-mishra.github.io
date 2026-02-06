import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import StructuredData from '../../components/StructuredData';

export default function BlogPostItemWrapper(props): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    // If no metadata, this might be a list page or tag page wrapper
    // Just render children (which is the default BlogPostItem)
    if (!props.metadata) {
        return <BlogPostItem {...props} />;
    }

    const { metadata } = props;
    const {
        title,
        date,
        authors,
        frontMatter,
        description,
        permalink,
    } = metadata;

    // Construct the absolute URL for the post image
    // Handle both external URLs and local paths
    let imageUrl = frontMatter.image;
    if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = siteConfig.url + imageUrl;
    }

    // Format authors for Schema.org
    const authorSchema = authors.map(author => ({
        "@type": "Person",
        "name": author.name,
        "url": author.url || undefined,
        "image": author.imageURL || undefined,
        "jobTitle": author.title || undefined
    }));

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": imageUrl ? [imageUrl] : undefined,
        "datePublished": date,
        "dateModified": date, // Docusaurus often provides same date; ideally this would be last updated
        "author": authorSchema.length === 1 ? authorSchema[0] : authorSchema,
        "description": description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": siteConfig.url + permalink
        },
        "publisher": {
            "@type": "Person",
            "name": "Manu Mishra",
            "logo": {
                "@type": "ImageObject",
                "url": "https://manumishra.com/img/logo.png"
            }
        }
    };

    return (
        <>
            <StructuredData data={blogPostingSchema} />
            <BlogPostItem {...props} />
        </>
    );
}
