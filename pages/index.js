import Flex from "../src/components/Flex";
import Box from "../src/components/Box";
import TextSub from "../src/components/TextSub";
import Text from "../src/components/Text";
import Link from "../src/components/Link";

export default function Home() {
  return (
    <>
      <Flex
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "auto",
          marginTop: "40px",
        }}
      >
        <p style={{ fontSize: "24px" }}>Ricardo Gonçalves da Fonseca</p>
      </Flex>
      <Box style={{ marginTop: "60px" }}>
        <Text>
          Desenvolvedor Front-end especializado em React, tenho como paixão
          desenvolver projetos e componentes em grande escala. Busco estar
          constantemente evoluindo e desenvolvendo meus conhecimentos e
          habilidades. Além disso, busco um time e projeto que me inspirem a
          estar sempre melhorando. Conheça mais{" "}
          <Link href="./sobre">sobre mim</Link>
        </Text>
        <Box style={{ marginTop: "60px" }}>
          <TextSub>Atualmente</TextSub>
          <Text style={{ marginTop: "15px" }}>
            No momento estou trabalhando como Desenvolvedor Front-end na{" "}
            <Link href="https://primedb.solutions/pt/" target="_blank">
              Prime DB
            </Link>
            , atuando como desevolvedor solo, responsável pela migração da
            aplicação interna de chamados/incidentes para uma stack atualizada e
            performática.
          </Text>
          <Text style={{ marginTop: "15px" }}>
            Atualmente focado em JavaScript e React. Mas estou sempre buscando
            novos conhecimentos em outras areas de tecnologia.
          </Text>
        </Box>
        <Box style={{ marginTop: "120px" }}>
          <Text>Minha experiência profissional:</Text>
          <Flex
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "60px",
            }}
          >
            <Box>
              <Text>Prime DB Solutions</Text>
              <Text
                style={{
                  marginTop: "15px",
                  color: "#687076",
                  fontSize: "18px",
                }}
              >
                Desenvolvedor Front-End
              </Text>
              <TextSub style={{ paddingTop: "5px" }}>
                Julho 2023 - Atualmente
              </TextSub>
            </Box>
            <Box>
              <Text>MadeiraMadeira</Text>
              <Text
                style={{
                  marginTop: "15px",
                  color: "#687076",
                  fontSize: "18px",
                }}
              >
                Analista de Sistemas Junior
              </Text>
              <TextSub style={{ paddingTop: "5px" }}>
                Abril 2023 - Julho 2023
              </TextSub>
            </Box>
          </Flex>
          <Flex
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "60px",
            }}
          >
            <Box>
              <Text>MadeiraMadeira</Text>
              <Text
                style={{
                  marginTop: "15px",
                  color: "#687076",
                  fontSize: "18px",
                }}
              >
                Assistente de desenvolvimento
              </Text>
              <TextSub style={{ paddingTop: "5px" }}>
                Março 2022 - Abril 2023
              </TextSub>
            </Box>
            <Box>
              <Text>MadeiraMadeira</Text>
              <Text
                style={{
                  marginTop: "15px",
                  color: "#687076",
                  fontSize: "18px",
                }}
              >
                Jovem aprendiz
              </Text>
              <TextSub style={{ paddingTop: "5px" }}>
                Fevereiro 2021 - Fevereiro 2022
              </TextSub>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
