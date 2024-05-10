import styled from "styled-components";
import HeaderTop from "../components/headerTop";
import SectionProducts from "../components/sectionProducts";

export default function Home() {
  return (
    <Container>
      <HeaderTop />
      <SectionProducts />
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
