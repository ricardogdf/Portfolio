import Flex from "./Flex";
import Header from "./Header";
import TextSub from "./TextSub";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <Flex className="development">
          <TextSub as="span">...</TextSub>
        </Flex>
        <Flex className="sky">
          <TextSub as="span">Araucária, PR - Brasil</TextSub>
        </Flex>
      </footer>
    </>
  );
}
