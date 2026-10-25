
import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  url,
}) {
  const siteName = "SAVORA";
  const pageTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:type" content="website" />

      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
        </>
      )}
    </Helmet>
  );
}

export default SEO;
