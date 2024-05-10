import styled from "styled-components"
import { FaCartPlus } from "react-icons/fa";

export default function CardButton(){

  function Cart(){
    console.log("alo chara")
  }
  
    return(
        <CartButtom onClick={() => Cart()}>
        <FaCartPlus /> <p>0</p>
      </CartButtom>
    )
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

  p {
    width: 20px;
    font-size: 10px;
    font-weight: bolder;
  }
`;
