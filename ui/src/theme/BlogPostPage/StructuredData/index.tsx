import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useBlogPost,
  useBlogPostStructuredData,
} from '@docusaurus/plugin-content-blog/client';

/** Keep BlogPosting JSON-LD image data aligned with social metadata. */
export default function BlogPostStructuredData(): ReactNode {
  const structuredData = useBlogPostStructuredData();
  const {metadata} = useBlogPost();
  const {image: defaultImage} = useThemeConfig();
  const {withBaseUrl} = useBaseUrlUtils();

  const fallbackImageUrl = defaultImage
    ? withBaseUrl(defaultImage, {absolute: true})
    : undefined;

  const data =
    structuredData.image || !fallbackImageUrl
      ? structuredData
      : {
          ...structuredData,
          image: {
            '@type': 'ImageObject',
            '@id': fallbackImageUrl,
            url: fallbackImageUrl,
            contentUrl: fallbackImageUrl,
            caption: `title image for the blog post: ${metadata.title}`,
          },
        };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
