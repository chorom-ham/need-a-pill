import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const siteDescription =
  "Needapillkr provides information on OTC medicine YOU need when visiting Korea";

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
            content="https://postfiles.pstatic.net/MjAxOTEyMjZfMTU5/MDAxNTc3MzU5OTU4NDUz.2C_4Rk4BGx2GMNimVoCAgZqHzo2QQD17OqmFcx3oabwg.3DK7Jt-lWD_asA1rB493l1I_TKg1ZrmvCeGXhEKze6Ug.PNG.yadongbihs/image.png?type=w966"
          />
          <meta
            name="naver-site-verification"
            content="c1d49792ce9d0ac48e7ebc41fe63b4060490c2e4"
          />
          <meta
            name="naver-site-verification"
            content="3ea05ed2aa4dd196b25557ca12aff0ac8a6202ae"
          />
          <link rel="canonical" href="https://needapillkr.com/index"></link>
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
