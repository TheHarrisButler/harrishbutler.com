import NextHead from "next/head";

export const Head = () => (
  <NextHead>
    <title key="title">H16R</title>
    <meta name="description" content="Harris Butler personal site" />
    <meta content="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="application-name" content="Harris Butler Personal Site" />
    <meta name="color-scheme" content="dark" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/images/favicon-16x16.png"
    />
  </NextHead>
);
