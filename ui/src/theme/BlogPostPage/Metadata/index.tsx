import React, {type ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

/**
 * Article metadata shared by every blog post.
 *
 * Docusaurus 3.8 generates page-specific Open Graph title, description, and
 * image metadata, but only generates `twitter:image`. This override keeps the
 * built-in behavior and adds the missing article-specific Twitter fields.
 */
export default function BlogPostPageMetadata(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const {title, description, date, tags, authors, frontMatter} = metadata;

  const socialTitle = frontMatter.title_meta ?? title;
  const {keywords} = frontMatter;
  const image = assets.image ?? frontMatter.image;

  return (
    <PageMetadata
      title={socialTitle}
      description={description}
      keywords={keywords}
      image={image}>
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image:alt" content={socialTitle} />
      <meta name="twitter:image:alt" content={socialTitle} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .map((author) => author.url)
            .filter(Boolean)
            .join(',')}
        />
      )}
      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
    </PageMetadata>
  );
}
