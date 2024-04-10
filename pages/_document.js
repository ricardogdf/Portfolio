import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Header from "../src/components/Header";
import Flex from "../src/components/Flex";
import TextSub from "../src/components/TextSub";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <NextScript />

          <footer>
            <Flex className="development">
              <TextSub as="span">...</TextSub>
            </Flex>
            <Flex className="sky">
              <TextSub as="span">Araucária, PR - Brasil</TextSub>
            </Flex>
          </footer>
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
