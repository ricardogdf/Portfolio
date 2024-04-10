import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Layout from "../src/components/layout";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

:root{
  --background: #FFFFFF;
  --foreground: #000000;
  --colorLinks: linear-gradient(
    25deg,
    #fa3cf9 1.7%,
    #fc587e 50.85%,
    #fc3239 99.99%
  );
}

[data-theme='dark']{
  --background: #000000;
  --foreground: #FFFFFF;
  --colorLinks: linear-gradient(
    25deg,
    #fa3cf9 1.7%,
    #fc587e 50.85%,
    #fc3239 99.99%
  );
}

body {
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: var(--background);
  color: var(--foreground);
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
}

.iconsSocialMedias svg path {
  fill: var(--foreground)
}

img{
    max-width: 100%;
    height: auto;
    display: block; 
}

button{
  border: none;
}

.development{
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 100px 0 10px 0;
}

.sky{
  height: 100px;
  flex-direction: column;
  background:var(--background);
  justify-content: center;
  align-items: center;
  line-height: 2;
}


.mentions{
  margin-top: 100px;
}

.name{
  margin-bottom: 20px;
}

.description{
  margin-bottom: 20px;
  color: #687076;
}

.boxSocialMedias{
  margin-top: 40px
}

.mbMedias{
  margin-bottom: 20px;
}

.linkSocialMedias{
  color: var(--foreground)
  margin: 10px 0 0 40px;
}

.nameSocialMedias{
  width: 90px;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NextThemeProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NextThemeProvider>
    </>
  );
}
