import styled from "styled-components";
import HeaderTop from "../components/header/headerTop";
import SectionProducts from "../components/sectionProduct/sectionProducts";
import { useState } from "react";


export default function Home() {
  const [productsSelected, setProductsSelected]= useState([])
  const [finalized, setFinalized] = useState(false)


  
  return (
    <Container>
      <HeaderTop setFinalized={setFinalized} finalized={finalized} productsSelected={productsSelected} setProductsSelected={setProductsSelected} />
        <SectionProducts finalized={finalized}  productsSelected={productsSelected} setProductsSelected={setProductsSelected}/>
    
      <Footer><p>MKS sistemas © Todos os direitos reservados</p></Footer>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh; /* Alterado para min-height para garantir que o contêiner tenha pelo menos a altura da tela */
`;

const Footer = styled.footer`
width: 100%;
background-color: #eeeeee;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;

`
