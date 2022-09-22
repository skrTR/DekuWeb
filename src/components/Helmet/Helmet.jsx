import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title, ogTitle, ogDescrtiption, image }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {ogDescrtiption && (
        <meta name="description" key="description" content={ogDescrtiption} />
      )}
      {title && <meta name="title" key="title" content={title} />}
      {ogTitle && <meta property="og:title" key="og:title" content={ogTitle} />}

      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      {ogDescrtiption && (
        <meta
          property="og:description"
          key="og:description"
          content={ogDescrtiption}
        />
      )}
      {image && (
        <meta
          property="og:image"
          key="og:image"
          content={`https://medialabadmin.com/upload/${image}`}
        />
      )}

      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
    </Helmet>
  );
};

export default PageHelmet;
