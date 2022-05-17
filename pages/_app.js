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
  --backgroundThemeLight: #FFF;
  --backgroundThemeDark: #2f3232;
  --stateOfDay: #f7f7b8;
}

[data-theme='dark']{
  --background: #000000;
  --foreground: #FFFFFF;
  --hoverWorked: rgb(22 21 21 / 10%);
  --backgroundThemeDark: #000;
  --backgroundThemeLight: #2f3232;
  --stateOfDay: #120c56;
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

.worked{
  width: 40%;
  height: auto; 
  border-radius: 10px; 
  padding: 20px; 
  cursor: pointer;
}

.worked:hover{
  background-color: var(--hoverWorked);
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
