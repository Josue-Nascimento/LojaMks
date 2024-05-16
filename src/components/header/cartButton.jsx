import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import Cart from "../cart/cart";

export default function CartButton({ productsSelected, setProductsSelected }) {
  const [cardValue, setCardValue] = useState(false);

  // Function to toggle the visibility of the cart
  const handleToggleCart = () => {
    setCardValue(!cardValue); // Toggles between opening and closing the cart
  };
  
  return (
    <div onClick={handleToggleCart}>
      <CartButtonWrapper>
         {cardValue && (
          <Cart
            productsSelected={productsSelected}
            setProductsSelected={setProductsSelected}
            setCardValue={setCardValue} 
          />
        )}
        <FaCartPlusIcon />
        <p className="productLength">{productsSelected.length}</p>
      </CartButtonWrapper>
    </div>
  );
}

const CartButtonWrapper = styled.div`
background-color: white;
  width: 90px;
  height: 45px;
  border: none;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  width: 65px;
  height: 35px;
 ;

  .productLength {
    width: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: black;
  }
`;
const FaCartPlusIcon = styled(FaCartPlus)`
font-size: 15px;
 color: black;
`;

