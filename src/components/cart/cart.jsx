import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import ListCart from "../cart/listCart";

export default function Cart({
  productsSelected,
  setCardValue,
  setProductsSelected,
}) {
  // Function to handle closing the cart
  const handleClose = () => {
    setCardValue(false); // Fecha a aba
  };

  // Function to prevent click events inside the cart from affecting elements outside of it
  const handleClickInside = (e) => {
    e.stopPropagation(); //// Prevents clicks inside the cart from affecting elements outside
  };

  return (
    <CartContainer onClick={handleClickInside}>
      <CartTop>
        <h1>Carrinho de compras</h1>
        <CloseIcon onClick={() => handleClose()} />
      </CartTop>
      <ListCart
        productsSelected={productsSelected}
        setProductsSelected={setProductsSelected}
      />
     
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 481px;
  height: 100vh;
  position: relative;
  background-color: #0f52ba;
  
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 30px;
    color: #f8f8f8;
    margin-right: 1px;
  }
`;

const CloseIcon = styled(IoMdCloseCircle)`
  width: 38px;
  height: 38px;
  margin-left: auto;
  cursor: pointer;
`;


