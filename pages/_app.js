import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

:root{
  --background: #FFFFFF;
  --foreground: #000000;
  --backgroundThemeLight: #FFF;
  --backgroundThemeDark: #2f3232;
  --colorLinks: #F0E68C;
  --stateOfDay: #f7f7b8;
}

[data-theme='dark']{
  --background: #000000;
  --foreground: #FFFFFF;
  --backgroundThemeDark: #000;
  --backgroundThemeLight: #2f3232;
  --colorLinks: #4B0082;
  --stateOfDay: #120c56;
}

body {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  background-color: var(--background);
  color: var(--foreground);
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
}

svg path {
  fill: var(--foreground)
}

img{
    max-width: 100%;
    height: auto;
    display: block; 
}

button{
  border: none;
  background-color: #2f3232;
}

.selectDarkMode{
  background-color: var(--backgroundThemeDark);
  border-radius: 100%;
  padding: 2px;
  justify-content: center;
  align-items: center;
}

.selectlightMode{
  background-color: var(--backgroundThemeLight);
  border-radius: 100%;
  padding: 2px;
  justify-content: center;
  align-items: center;
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
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
    </>
  );
}
