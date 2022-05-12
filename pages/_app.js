import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body {
    "Space Grotesk", serif;
    background-color: #000000;
    color: #FFFFFF;
    font-weight: 500;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block; 
  }

  .dark-mode {
    animation: dark 0.5s forwards;
    color: #FFFFFF;
  }
  .light-mode {
    animation: light 0.5s forwards;
    color: #000000;
  }

  @keyframes light {
    0% {
      background-color: #000000;
    }
  
    100% {
      background-color: #FFFFFF;
    }
  }

  @keyframes dark {
    0% {
      background-color: #FFFFFF;
    }
    
    100% {
      background-color: #000000;
    }
  }

  .selected {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    animation: slide 2s forwards;
    cursor: pointer;
  }

  .off {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
    background-color: #202425;
  }
  
  @keyframes slide {
    0% {
      background-color: #202425;
    }
  
    100% {
      background-color: #373e44;
    }

  }

  .worked-dark:hover{
    background-color: rgba(0, 17, 20, 0.3);
  }

  .worked-light:hover{
    background-color: rgba(200, 200, 200, 0.1);
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
