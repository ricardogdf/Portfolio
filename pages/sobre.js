import Flex from '../src/components/Flex'
import Box from '../src/components/Box'
import BoxSocialMedia from '../src/components/BoxSocialMedia'
import Container from '../src/components/Container'
import TextSub from '../src/components/TextSub'
import Text from '../src/components/Text'
import Link from '../src/components/Link'
import Header from '../src/components/Header'
import { useTheme } from 'next-themes'

export default function Sobre() {
    const { setTheme } = useTheme()
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }
    const interval = setInterval(() => {
        const now = new Date();
        const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());
        document.getElementById('time').innerHTML = dataHora;
    }, 1000);
    return (
        <>
            <Header>
                <Flex style={{ gap: '10px' }}>
                    <a href='https://github.com/ricardogdf'>
                        <BoxSocialMedia>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
                        </BoxSocialMedia>
                    </a>
                    <a href='https://www.linkedin.com/in/ricardo-gon%C3%A7alves-da-fonseca-0437741b0'>
                        <BoxSocialMedia>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" /></svg>
                        </BoxSocialMedia>
                    </a>
                    <a href='https://www.instagram.com/mad.rickk/'>
                        <BoxSocialMedia>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg>
                        </BoxSocialMedia>
                    </a>
                    <a href='https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSHvpDhMTCfjcFpsHLzxzhfFCprDtrlZDzzphgbdjTSJRVHwvtptQKbnrNlKdQcTPMdwxqrL'>
                        <BoxSocialMedia>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.5 3 C 2.5788117 3 1 4.5788117 1 6.5 L 1 18 C 1 19.64497 2.3550302 21 4 21 L 8 21 L 8 13.673828 L 12 16.798828 L 16 13.673828 L 16 21 L 20 21 C 21.64497 21 23 19.64497 23 18 L 23 6.5 C 23 4.5788117 21.421188 3 19.5 3 C 18.750123 3 17.982547 3.2422598 17.34375 3.7421875 L 12 7.9121094 L 6.65625 3.7421875 L 6.6542969 3.7421875 C 6.0158061 3.2430811 5.2492693 3 4.5 3 z M 4.5 5 C 4.8301235 5 5.1426247 5.098287 5.4238281 5.3183594 L 6 5.7675781 L 6 9.5742188 L 3 7.2324219 L 3 6.5 C 3 5.6591883 3.6591883 5 4.5 5 z M 19.5 5 C 20.340812 5 21 5.6591883 21 6.5 L 21 7.2324219 L 18 9.5742188 L 18 5.7675781 L 18.576172 5.3183594 C 18.857375 5.0982871 19.169877 5 19.5 5 z M 8 7.328125 L 12 10.449219 L 16 7.328125 L 16 11.136719 L 12 14.261719 L 8 11.136719 L 8 7.328125 z M 3 9.7695312 L 6 12.111328 L 6 19 L 4 19 C 3.4349698 19 3 18.56503 3 18 L 3 9.7695312 z M 21 9.7695312 L 21 18 C 21 18.56503 20.56503 19 20 19 L 18 19 L 18 12.111328 L 21 9.7695312 z" /></svg>
                        </BoxSocialMedia>
                    </a>
                </Flex>
                <Flex style={{ width: '70px', height: '30px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '9999px', backgroundColor: '#2f3232' }}>
                    <button onClick={() => setTheme('dark')}>
                        <Flex className='selectDarkMode'>
                            <svg width='15px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" aria-label="dark theme icon"><path d="M12.97 9.97a6 6 0 0 1-7.94-7.94 6 6 0 1 0 7.94 7.94Z"></path></svg>
                        </Flex>
                    </button>
                    <button onClick={() => setTheme('light')}>
                        <Flex className='selectlightMode'>
                            <svg width='15px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" aria-label="light theme icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg>
                        </Flex>
                    </button>
                </Flex>
            </Header>
            <Container>
                <Box>
                    <Text as={'h2'} style={{ marginBottom: '20px' }}>Olá! Seja bem-vindo!</Text>
                    <Text>Meu nome é Ricardo, tenho 17 anos, comecei a estudar assuntos relacionados a programação aproximadamente no segundo semestre de 2020 e comecei a trabalhar na área em fevereiro de 2021 como menor aprendiz desenvolvedor na <Link href='https://www.madeiramadeira.com.br/'>MadeiraMadeira</Link>. Desde que comecei aprendi muitas coisas sem dúvida, tanto em conhecimento de código que eu evolui extremamente, como também melhorei muito minhas habilidades em me comunicar e aprender.</Text>
                    <TextSub style={{ margin: '60px 0 15px 0' }}>Mais sobre mim</TextSub>
                    <Text>Além de programar, meus hobbies se baseiam em jogos <Link href='https://tecnoblog.net/responde/o-que-sao-jogos-fps/'>FPS</Link> online, assistir séries e filmes de ficção científica, fazer origamis e principalmente assistir animes.</Text>
                    <Text>Claramente para aprender tudo que eu sei, não foi sozinho tive comigo pessoas que me ajudaram e me ensinaram muito, dentre elas alguns fizeram mais diferença para minha evolução, que são elas:</Text>
                </Box>
                <Box className='mentions'>
                    <Text className='name'>Leonardo Gonçalves da Fonseca</Text>
                    <Text className='description'>Grande contribuidor para tudo que conquistei e sigo conquistando, devido a todo apoio e confiança que ele sempre depositou em mim. Grande inspiração de persistência, disciplina e superação. Além de um grande mentor, companheiro e irmão. Grande inspiração como pessoa e profissional. Farmacêutico, formado em farmácia e cursando especialização em Data Science.</Text>
                    <Box className='boxSocialMedias'>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Instagram:</Box> <Flex className='socialMedias'><Link className='linkSocialMedias' href='https://www.instagram.com/leo_gnclvs/'>leo_gnclvs</Link></Flex></Flex>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Linkedin:</Box><Flex className='socialMedias'><Link className='linkSocialMedias' href='https://www.linkedin.com/in/leonardo-gon%C3%A7alves-da-fonseca/'>Leonardo Gonçalves da Fonseca</Link></Flex></Flex>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Site:</Box><Flex className='socialMedias'><Link className='linkSocialMedias' href='https://cafeconscientia.com.br/'>cafeconscientia.com.br</Link></Flex></Flex>
                    </Box>
                </Box>
                <Box className='mentions'>
                    <Text className='name'>Patrick Gonçalves Lima</Text>
                    <Text className='description'>Uma das maiores inspirações tanto de pessoa como de profissional. Desde sempre apoiou e acreditou em tudo que eu fazia, vindo dele o incentivo inicial para eu ingressar nessa área que tanto amo hoje. Começando desde instigar os primeiros estudos na área até confiar no meu potencial para me indicar para meu primeiro emprego. Grande amigo, mentor, inspiração e irmão de consideração. Desenvolvedor Front-end sênior, bacharelado em Sistemas da Informação, especializado em Data Science e Big Data e cursando especialização em Data Science</Text>
                    <Box className='boxSocialMedias'>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Instagram:</Box> <Flex className='socialMedias'><a className='linkSocialMedias' href='https://www.instagram.com/patrick.gl/'>patrick.gl</a ></Flex></Flex>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Linkedin:</Box><Flex className='socialMedias'><a className='linkSocialMedias' href='https://www.linkedin.com/in/patrickgdl/'>Patrick Lima</a ></Flex></Flex>
                        <Flex className='mbMedias'><Box className='nameSocialMedias'>Site:</Box><Flex className='socialMedias'><a className='linkSocialMedias' href='https://www.patricklima.dev/'>patricklima.dev</a ></Flex></Flex>
                    </Box>
                </Box>
                <footer>
                    <Flex className='development'>
                        <TextSub as='span'>...</TextSub>
                    </Flex>
                    <Flex className="sky">
                        <TextSub as='span'>Araucária, PR - Brasil</TextSub>
                        <TextSub as='span' id='time'></TextSub>
                    </Flex>
                </footer>
            </Container >
        </>
    )
}