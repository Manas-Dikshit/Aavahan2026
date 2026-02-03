import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata, buildAbsoluteUrl } from "@/utilities/seo-config";

export default function Seo({
  title,
  description,
  keywords = [],
  type = "website",
  image,
  url,
  noIndex = false,
  structuredData,
}) {
  const router = useRouter();
  const path = router?.asPath || "/";

  const pageUrl = url || buildAbsoluteUrl(path.split("?")[0]);
  const fullTitle = title
    ? `${title} | ${siteMetadata.shortName}`
    : siteMetadata.siteName;
  const metaDescription = description || siteMetadata.description;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : buildAbsoluteUrl(image)
    : buildAbsoluteUrl("/Cultural Logo.svg");

  const allKeywords = Array.from(
    new Set([...(siteMetadata.keywords || []), ...(keywords || [])])
  );

  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

  const jsonLd = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta name="robots" content={robotsContent} />
      <meta name="theme-color" content={siteMetadata.themeColor} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={siteMetadata.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitterHandle && (
        <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      )}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />

      {/* JSON-LD structured data */}
      {jsonLd.map((data, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </Head>
  );
}
