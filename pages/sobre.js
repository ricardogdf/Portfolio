import Flex from "../src/components/Flex";
import Box from "../src/components/Box";
import TextSub from "../src/components/TextSub";
import Text from "../src/components/Text";
import Link from "../src/components/Link";

export default function Sobre() {
  return (
    <>
      <Box style={{ marginTop: "40px" }}>
        <Text as={"h2"} style={{ marginBottom: "20px" }}>
          Olá! Seja bem-vindo!
        </Text>
        <Text style={{ marginBottom: "20px" }}>
          Meu nome é Ricardo, tenho 19 anos, comecei a estudar assuntos
          relacionados a programação aproximadamente no segundo semestre de 2020
          e comecei a trabalhar na área em fevereiro de 2021 como Menor aprendiz
          desenvolvedor na{" "}
          <Link href="https://www.madeiramadeira.com.br/" target="_blank">
            MadeiraMadeira
          </Link>
          . Desde o começo meu foco sempre foi na parte de desenvolvimento
          Front-end e estar em um time composto totalmente por Desenvolvedores
          Front-end me fez ter uma experiência inestimável para meu aprendizado
          na área.
        </Text>
        <Text style={{ marginBottom: "20px" }}>
          Após um ano como aprendiz, fui efetivado para Assistente de
          Desenvolvimento, que me permitiu evoluir muito mais, devido ao aumento
          significativo da carga horária e também com a oportunidade de
          trabalhar em tasks mais complexas.
        </Text>
        <Text style={{ marginBottom: "20px" }}>
          Após mais um ano trabalhando e evoluindo como Assistente, fui
          promovido para Analista de Sistemas Junior, nesse ponto minha evolução
          já era notoria, exercerto task extremamente complexas com pouco ou
          nenhum auxílio dos meus colegas de equipe.
        </Text>
        <Text style={{ marginBottom: "20px" }}>
          E após algum tempo trabalhando como Analista de Sistemas Junior,
          recebi uma proposta muito interessante para a minha evolução pessoal,
          um trabalho como Desenvolvedor Front-end solo, para migração do
          sistema interno da empresa para uma versão mais atualizada e
          performática. Fiquei muito animado e tentado ao desafio, pois queria
          aprimorar também minhas habilidades de comunicação, que foram muito
          mais exigidas como desenvolvedor solo. Além de todo o aprendizado em
          relação a comunicação tem sido uma experiência enriquecedora por conta
          de todas as demandas, gerenciamento e estimar tempo, analise e
          correção de problemas, implementação de novas features além de muitas
          coisa que me fizeram evoluir de uma forma exponencial.
        </Text>
        <TextSub style={{ margin: "60px 0 15px 0" }}>Mais sobre mim</TextSub>
        <Text>
          Além de programar, meus hobbies se baseiam em jogos{" "}
          <Link
            href="https://tecnoblog.net/responde/o-que-sao-jogos-fps/"
            target="_blank"
          >
            FPS
          </Link>
          , assistir séries e filmes de ficção científica, fazer origamis e
          principalmente assistir animes.
        </Text>
        <Text>
          Claramente para aprender tudo que eu sei, não foi sozinho tive comigo
          pessoas que me ajudaram e me ensinaram muito, tanto para evolução
          profissional como pessoal, dentre elas alguns fizeram mais diferença
          para minha evolução, que são elas:
        </Text>
      </Box>
      <Box className="mentions">
        <Text className="name">Leonardo Gonçalves da Fonseca</Text>
        <Text className="description">
          Grande contribuidor para tudo que conquistei e sigo conquistando,
          devido a todo apoio e confiança que ele sempre depositou em mim. A
          importância dele na minha vida não é mensurada em meras palavras, dado
          que ele esteve sempre comigo em todos os momentos difíceis, estando
          sempre me apoiando e ajudando a superá-los. Grande inspiração de
          persistência, disciplina e superação. Além de um grande mentor,
          companheiro e irmão. Grande inspiração como pessoa e profissional.
          Farmacêutico, formado em farmácia e cursando especialização em Data
          Science.
        </Text>
        <Box className="boxSocialMedias">
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Instagram:</Box>{" "}
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://www.instagram.com/leo_gnclvs/"
                target="_blank"
              >
                @leo_gnclvs
              </a>
            </Flex>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Linkedin:</Box>
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://www.linkedin.com/in/leonardo-gon%C3%A7alves-da-fonseca/"
                target="_blank"
              >
                Leonardo Gonçalves da Fonseca
              </a>
            </Flex>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Site:</Box>
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://cafeconscientia.com.br/"
                target="_blank"
              >
                cafeconscientia.com.br
              </a>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box className="mentions">
        <Text className="name">Patrick Gonçalves Lima</Text>
        <Text className="description">
          Uma das maiores inspirações tanto de pessoa como de profissional.
          Desde sempre apoiou e acreditou em tudo que eu fazia, vindo dele o
          incentivo inicial para eu ingressar nessa área que tanto amo hoje.
          Começando desde instigar os primeiros estudos na área até confiar no
          meu potencial para me indicar para meu primeiro emprego. Referência
          que levo para meu futuro, além de um grande amigo, mentor e irmão de
          consideração. Desenvolvedor Front-end sênior, bacharelado em Sistemas
          da Informação, especializado em Data Science e Big Data e cursando
          especialização em Data Science
        </Text>
        <Box className="boxSocialMedias">
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Instagram:</Box>{" "}
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://www.instagram.com/patrick.gl/"
                target="_blank"
              >
                @patrick.gl
              </a>
            </Flex>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Linkedin:</Box>
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://www.linkedin.com/in/patrickgdl/"
                target="_blank"
              >
                Patrick Lima
              </a>
            </Flex>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Site:</Box>
            <Flex className="socialMedias">
              <a
                className="linkSocialMedias"
                href="https://www.patricklima.dev/"
                target="_blank"
              >
                patricklima.dev
              </a>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box className="mentions">
        <Text className="name">Giovane Ferreira</Text>
        <Text className="description">
          Uma grande inspiração como profissional e pessoa, sendo uma das
          maiores referências para mim na área da programação. Devido ao contato
          constante com o time, tive muito apoio e ensinamentos vindo da parte
          dele, desde códigos complexos à apoiar constantemente a buscar novas
          comunicações para melhora desse quesito tão importante. Grande amigo,
          companheiro de trabalho e inspiração. Desenvolvedor Full-Stack sênior,
          Tecnólogo em Análise e Desenvolvimento de Sistemas e Pós-graduação em
          Sistemas Embarcados e Internet das Coisas.
        </Text>
        <Box className="boxSocialMedias">
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Instagram:</Box>{" "}
            <a
              className="linkSocialMedias"
              href="https://www.instagram.com/giovane_f/"
              target="_blank"
            >
              @giovane_f
            </a>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Linkedin:</Box>
            <a
              className="linkSocialMedias"
              href="https://www.linkedin.com/in/giovaneferreira/"
              target="_blank"
            >
              Giovane Ferreira
            </a>
          </Flex>
          <Flex className="mbMedias">
            <Box className="nameSocialMedias">Site:</Box>
            <a
              className="linkSocialMedias"
              href="https://giovaneferreira.com.br/"
              target="_blank"
            >
              giovaneferreira.com.br
            </a>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
