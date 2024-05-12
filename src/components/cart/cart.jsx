import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import ListCart from "../cart/listCart";

export default function Cart({
  productsSelected,
  setCardValue,
  setProductsSelected,

}) {
  const calculateTotalPrice = () => {
    //function to calculate the total price
    const totalPrice = productsSelected.reduce((total, product) => {
      // Converts the string to a number
      const price = parseFloat(product.price);

      if (!isNaN(price)) {
        // If it's a number, add it to the total
        return total + price;
      } else {
        // If not a number, returns the current total
        return total;
      }
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handleClose = () => {
    setCardValue(false); // Fecha a aba
  };

  return (
    <CartContainer>
      <CartTop>
        <h1>Carrinho de compras</h1>
        <CloseIcon onClick={()=>handleClose()} />
      </CartTop>
      <ListCart
        productsSelected={productsSelected}
        setProductsSelected={setProductsSelected}
      />
      <OrderFinalized>
       
        <h1>Finalizar Compra</h1>
      </OrderFinalized>
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
    width: 272px;
    font-size: 27px;
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



const OrderFinalized = styled.div`
  width: 100%;
  color: white;
  position: absolute; /* Altera para position: absolute */
  bottom: 0;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;

  h1 {
    background-color: black;
    width: 100%;
    height: 67px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
  }
`;
