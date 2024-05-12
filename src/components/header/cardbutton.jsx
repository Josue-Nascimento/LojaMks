import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import Cart from "../cart/cart";

export default function CardButton({ productsSelected, setProductsSelected }) {
  const [cardValue, setCardValue] = useState(false);
  console.log(cardValue);

  
  return (
    <CartButtom onClick={()=>setCardValue(true)}>
      {cardValue ? (
        <Cart  setProductsSelected={setProductsSelected} productsSelected={productsSelected} setCardValue={setCardValue} />
      ) : (
        ""
      )}
      <FaCartPlus />
      <p>{productsSelected.length}</p>
    </CartButtom>
  );
}

const CartButtom = styled.button`
  width: 90px;
  height: 45px;
  border: none;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  p {
    width: 20px;
    font-size: 10px;
    font-weight: bolder;
  }
`;

const Insidethecart = styled.div`
  background-color: #717882;
  width: 488px;
  height: 200%;
  position: fixed;
  right: 0px;
`;
