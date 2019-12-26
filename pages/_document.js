import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const siteDescription =
  "Needapill is a service for foreigners residing in Korea who are in need of medicinal information.";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content={"Need a Pill"} />
          <meta property="og:description" content={siteDescription} />
          <meta
            property="og:image"
            content="https://lithub.com/wp-content/uploads/2019/03/pills.jpg"
          />
          <script
            data-ad-client="ca-pub-5202070596232358"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
        `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
