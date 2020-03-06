import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';
const defaultAuthor = 'Driggl - https://driggl.com';
const defaultOGType = 'website';
const defaultSiteName = 'Driggl - Modern Web Development';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="author" content={props.author || defaultAuthor} />
    <link rel="icon" href="/favicon.ico" />

    <meta property="og:site_name" content={props.siteName || defaultSiteName} />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.ogTitle || props.title || ''} />
    <meta property="fb:app_id" content={process.env.FB_APP_ID} />

    <meta
      property="og:description"
      content={props.ogDescription || props.description || defaultDescription}
    />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta property="og:type" content={props.ogType || defaultOGType} />
    {
      props.ogType == "article" ? (
        <meta property="article:author" content="https://www.facebook.com/sebastian.wilgosz" />
      ) : null
    }
    {
      props.ogType == "article" ? (
        <meta property="article:publisher" content="https://www.facebook.com/driggl" />
      ) : null
    }

    <meta name="twitter:title" content={props.twitterTitle || props.OGTitle || props.title} />
    <meta name="twitter:site" content={props.twitterSite || props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta
      name="twitter:description"
      content={props.twitterDescription || props.OGDescription || props.description || defaultDescription}
    />

  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  author: string,
  ogDescription: string,
  ogTitle: string,
  twitterSite: string
};

export default Head;
