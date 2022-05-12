import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

*{
  margin: 0;
  padding: 0;
}

:root{
  --background: #FFFFFF;
  --foreground: #000000;
  --hoverWorked: rgb(185 194 195 / 10%);
}

[data-theme='dark']{
  --background: #000000;
  --foreground: #FFFFFF;
  --hoverWorked: rgb(22 21 21 / 10%);
}

body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: var(--background);
    color: var(--foreground);
    font-weight: 500;
}

svg path {
  fill: var(--foreground)
}

img{
    max-width: 100%;
    height: auto;
    display: block; 
}

.worked:hover{
  background-color: var(--hoverWorked)
}

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

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
  )
}
