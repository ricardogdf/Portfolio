import Flex from '../src/components/Flex'
import Box from '../src/components/Box'
import BoxSocialMedia from '../src/components/BoxSocialMedia'
import Container from '../src/components/Container'
import TextSub from '../src/components/TextSub'
import Text from '../src/components/Text'
import Link from '../src/components/Link'
import Header from '../src/components/Header'

export default function Home() {

  function darkMode() {
    var element = document.body;
    var worked = document.getElementById("worked");
    var worked1 = document.getElementById("worked-1");
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");
    element.className = "dark-mode";
    dark.className = "selected";
    light.className = "off";
    worked.className = "worked-dark"
    worked1.className = "worked-dark"
  }

  function lightMode() {
      var element = document.body;
      var worked = document.getElementById("worked");
      var worked1 = document.getElementById("worked-1");
      var dark = document.getElementById("dark");
      var light = document.getElementById("light");
      element.className = "light-mode";
      light.className = "selected";
      dark.className = "off";
      worked.className = "worked-light"
      worked1.className = "worked-light"
  }
  return (
    <>
    <Header>
      <Flex style={{gap: '10px'}}>
        <BoxSocialMedia>
          
        </BoxSocialMedia>
        <BoxSocialMedia>
          
        </BoxSocialMedia>
        <BoxSocialMedia>
          
        </BoxSocialMedia>
        <BoxSocialMedia>
          
        </BoxSocialMedia>
      </Flex>
      <Flex style={{width: '90px', height: '40px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '9999px', backgroundColor: '#202425'}}>
          <button onClick={darkMode} id= 'dark' className='selected'>
            <Flex style={{ justifyContent: 'center', alignItems: 'center'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="24" height="24" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_205_12" transform="scale(0.0104167)"/>
              </pattern>
              <image id="image0_205_12" width="96" height="96" xlinkHref="data:image/png;base64,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"/>
              </defs>
              </svg>
            </Flex>
          </button>
          <button onClick={lightMode} id= 'light' className='off' >
            <Flex style={{ justifyContent: 'center', alignItems: 'center'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.28364 5.25136L4.32 3.28971L2.78182 4.83492L4.73455 6.79656L6.28364 5.25136ZM3.27273 11.4541H0V13.6459H3.27273V11.4541ZM13.0909 0.549988H10.9091V3.78286H13.0909V0.549988V0.549988ZM21.2182 4.83492L19.68 3.28971L17.7273 5.25136L19.2655 6.79656L21.2182 4.83492ZM17.7164 19.8486L19.6691 21.8212L21.2073 20.276L19.2436 18.3144L17.7164 19.8486ZM20.7273 11.4541V13.6459H24V11.4541H20.7273ZM12 5.97464C8.38909 5.97464 5.45455 8.92259 5.45455 12.55C5.45455 16.1774 8.38909 19.1253 12 19.1253C15.6109 19.1253 18.5455 16.1774 18.5455 12.55C18.5455 8.92259 15.6109 5.97464 12 5.97464ZM10.9091 24.55H13.0909V21.3171H10.9091V24.55ZM2.78182 20.2651L4.32 21.8103L6.27273 19.8377L4.73455 18.2925L2.78182 20.2651Z" fill="#B7B7B7"/>
              </svg>
            </Flex>
          </button>
        </Flex>        
    </Header>
    
    <Container>
      <Flex style={{justifyContent: 'space-between', alignItems: 'center', height: 'auto'}}>
        <p style={{fontSize: '24px',}}>Ricardo Gonçalves da Fonseca</p>

      </Flex>
      <Box style={{ marginTop: '60px'}}>
        <Text>
          Entusiasta, estudante e interessado sobre o mundo Front-end e tecnologias em geral, buscando sempre novos conhecimentos e tentando exercê-los na prática. Admirador de animações e transições em css e javascript. Conheça mais <Link href='./ricardo'>sobre mim</Link>
        </Text>
        <Box style={{ marginTop: '60px'}}>
          <TextSub>Atualmente</TextSub>
          <Text style={{marginTop: '15px'}}>
            No momento estou trabalhando como Assistente de desenvolvimento na <Link href='https://www.madeiramadeira.com.br/'>MadeiraMadeira</Link>, um dos 16 unicórnios brasileiros.
          </Text>
          <Text style={{marginTop: '15px'}}>
            Outros assuntos que estou estudando e trabalhando <Link href='https://www.madeiramadeira.com.br/'>agora</Link>
          </Text>
        </Box>
        <Box style={{marginTop: '120px'}}>
          <Text>
            Minha experiência profissional:
          </Text>
          <Flex style={{alignItems: 'center', justifyContent: 'space-between', marginTop: '60px'}}>
              <Box className='worked-dark' id='worked' style={{width: '40%', height: 'auto', borderRadius: '10px', padding: '20px', cursor: 'pointer'}}>
                <Link href='./ricardo' style={{textDecoration: 'none'}}>
                  <Text>
                    MadeiraMadeira
                  </Text>
                  <Text style={{marginTop: '15px', color: '#687076', fontSize: '18px',}}>
                    Jovem aprendiz desenvolvedor
                  </Text>
                  <TextSub style={{paddingTop: '5px'}}>
                    Fevereiro 2021 - Fevereiro 2022
                  </TextSub>
                </Link>
              </Box>
                <Box className='worked-dark' id='worked-1' style={{width: '40%', height: 'auto', borderRadius: '10px', padding: '20px', cursor: 'pointer'}}>
                  <Link href='./ricardo' style={{textDecoration: 'none'}}>
                    <Text>
                      MadeiraMadeira
                    </Text>
                    <Text style={{marginTop: '15px', color: '#687076', fontSize: '18px',}}>
                      Assistente de desenvolvimento
                    </Text>
                    <TextSub style={{paddingTop: '5px'}}>
                      Março 2022 - Atualmente
                    </TextSub>
                  </Link>
                </Box>
          </Flex>
        </Box>
        <Box></Box>
      </Box>
    </Container>
    </>
  )
}
