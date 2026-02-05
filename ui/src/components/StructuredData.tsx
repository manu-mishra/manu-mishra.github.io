import React from 'react';
import Head from '@docusaurus/Head';

interface StructuredDataProps {
    data: Record<string, any> | Record<string, any>[];
}

export default function StructuredData({ data }: StructuredDataProps): JSX.Element {
    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Head>
    );
}
