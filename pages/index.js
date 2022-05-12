import Flex from '../src/components/Flex'
import Box from '../src/components/Box'
import BoxSocialMedia from '../src/components/BoxSocialMedia'
import Container from '../src/components/Container'
import TextSub from '../src/components/TextSub'
import Text from '../src/components/Text'
import Link from '../src/components/Link'
import Header from '../src/components/Header'
import { useTheme } from 'next-themes'

export default function Home() {
  const { setTheme } = useTheme()
  return (
    <>
      <Header>
        <Flex style={{ gap: '10px' }}>
          <BoxSocialMedia>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
          </BoxSocialMedia>
          <BoxSocialMedia>

          </BoxSocialMedia>
          <BoxSocialMedia>

          </BoxSocialMedia>
          <BoxSocialMedia>

          </BoxSocialMedia>
        </Flex>
        <Flex style={{ width: '70px', height: '30px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '9999px', backgroundColor: '#202425' }}>
          <button onClick={() => setTheme('dark')}>
            <Flex style={{ justifyContent: 'center', alignItems: 'center' }}>
              <svg width='15px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" aria-label="dark theme icon"><path d="M12.97 9.97a6 6 0 0 1-7.94-7.94 6 6 0 1 0 7.94 7.94Z"></path></svg>
            </Flex>
          </button>
          <button onClick={() => setTheme('light')}>
            <Flex style={{ justifyContent: 'center', alignItems: 'center' }}>
              <svg width='15px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" aria-label="light theme icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg>
            </Flex>
          </button>
        </Flex>
      </Header>

      <Container>
        <Flex style={{ justifyContent: 'space-between', alignItems: 'center', height: 'auto' }}>
          <p style={{ fontSize: '24px', }}>Ricardo Gonçalves da Fonseca</p>

        </Flex>
        <Box style={{ marginTop: '60px' }}>
          <Text>
            Entusiasta, estudante e interessado sobre o mundo Front-end e tecnologias em geral, buscando sempre novos conhecimentos e tentando exercê-los na prática. Admirador de animações e transições em css e javascript. Conheça mais <Link href='./ricardo'>sobre mim</Link>
          </Text>
          <Box style={{ marginTop: '60px' }}>
            <TextSub>Atualmente</TextSub>
            <Text style={{ marginTop: '15px' }}>
              No momento estou trabalhando como Assistente de desenvolvimento na <Link href='https://www.madeiramadeira.com.br/'>MadeiraMadeira</Link>, um dos 16 unicórnios brasileiros.
            </Text>
            <Text style={{ marginTop: '15px' }}>
              Outros assuntos que estou estudando e trabalhando <Link href='https://www.madeiramadeira.com.br/'>agora</Link>
            </Text>
          </Box>
          <Box style={{ marginTop: '120px' }}>
            <Text>
              Minha experiência profissional:
            </Text>
            <Flex style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: '60px' }}>
              <Box className='worked' style={{ width: '40%', height: 'auto', borderRadius: '10px', padding: '20px', cursor: 'pointer' }}>
                <Link href='./ricardo' style={{ textDecoration: 'none' }}>
                  <Text>
                    MadeiraMadeira
                  </Text>
                  <Text style={{ marginTop: '15px', color: '#687076', fontSize: '18px', }}>
                    Jovem aprendiz desenvolvedor
                  </Text>
                  <TextSub style={{ paddingTop: '5px' }}>
                    Fevereiro 2021 - Fevereiro 2022
                  </TextSub>
                </Link>
              </Box>
              <Box className='worked' style={{ width: '40%', height: 'auto', borderRadius: '10px', padding: '20px', cursor: 'pointer' }}>
                <Link href='./ricardo' style={{ textDecoration: 'none' }}>
                  <Text>
                    MadeiraMadeira
                  </Text>
                  <Text style={{ marginTop: '15px', color: '#687076', fontSize: '18px', }}>
                    Assistente de desenvolvimento
                  </Text>
                  <TextSub style={{ paddingTop: '5px' }}>
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
