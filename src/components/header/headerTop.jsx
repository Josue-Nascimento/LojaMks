import styled from "styled-components";
import CartButton from "./cartButton";

export default function HeaderTop({ productsSelected, setProductsSelected, setFinalized, finalized }) {
  return (
    <>
      <Header>
        <h1>
          MKS <span>Sistemas</span>
        </h1>
        <CartButton  setFinalized={setFinalized} finalized={finalized}
          setProductsSelected={setProductsSelected}
          productsSelected={productsSelected}
        />
      </Header>
    </>
  );
}

const Header = styled.div`
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  left: 65px;
  gap: 0px;
  opacity: 0px;
  top: 28px;
 
  color: white;

  h1 {
    font-size: 40px;
    margin-left: 50px;
    font-weight: bold;
    @media (max-width: 667px) {
      font-size: 30px;
      margin-left: 50px;
      font-weight: bold;
    }
  }

  span {
    font-size: 20px;
    font-weight: 100;
  }
`;
