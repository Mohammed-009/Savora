
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://savora-restaurant-vert-eta.vercel.app";

function SEO({ title, description }) {
  const { pathname } = useLocation();

  const canonicalPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const pageTitle = `${title} | SAVORA`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}

export default SEO;
