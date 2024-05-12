import styled from "styled-components";
import HeaderTop from "../components/header/headerTop";
import SectionProducts from "../components/sectionProducts";
import { useState } from "react";

export default function Home() {
  const [productsSelected, setProductsSelected]= useState([])
  console.log(productsSelected)
  
  return (
    <Container>
      <HeaderTop productsSelected={productsSelected} setProductsSelected={setProductsSelected} />
      <SectionProducts productsSelected={productsSelected} setProductsSelected={setProductsSelected}/>
      <Footer><p>MKS sistemas © Todos os direitos reservados</p></Footer>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Footer = styled.footer`
width: 100%;
background-color: #eeeeee;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;

`
