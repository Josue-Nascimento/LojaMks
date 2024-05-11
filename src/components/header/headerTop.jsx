import styled from "styled-components";
import CardButton from "../header/cardButton";


export default function HeaderTop({productsSelected}){
    return(
        <>
        <Header>
          <h1>
            MKS <span>Sistemas</span>
          </h1>
         <CardButton productsSelected={productsSelected}/>
        </Header>
      </>
    )
}

const Header = styled.div`
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  left: 65px;
  gap: 0px;
  opacity: 0px;
  top: 28px;
  font-family: Montserrat;
  color: white;

  h1 {
    font-size: 40px;
    margin-left: 50px;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    font-weight:100
  }
`;

