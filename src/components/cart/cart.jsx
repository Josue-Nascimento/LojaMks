import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

export default function Cart({ productsSelected, setCardValue }) {
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
  return (
    <CartContainer>
      <CartTop>
        <h1>Carrinho de compras</h1>
        <CloseIcon onClick={() => setCardValue(false)} />
      </CartTop>
      <ProductList>
        {productsSelected.map((product, index) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.photo} />

            <ProductName>{product.name}</ProductName>
            <QuantityControls>
              <QuantityButton>-</QuantityButton>
              <Quantity>1</Quantity>
              <QuantityButton>+</QuantityButton>
            </QuantityControls>

            <ProductPrice>R${product.price}</ProductPrice>
          </ProductItem>
        ))}
      </ProductList>
      <TotalPrice>
        <p>Total: </p>
        <p>R${calculateTotalPrice()}</p>
      </TotalPrice>
      <OrderFinalized>
        <h1>Finalizar Compra</h1>
      </OrderFinalized>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 481px;
  height: 100vh;
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

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  overflow-y: hidden;
  padding-bottom: 70px;
`;

const ProductItem = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  width: 400px;
  height: 95px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  
`;

const ProductImage = styled.img`
  width: 46px;
  height: 57px;
`;

const ProductName = styled.h2`
  width: 100px;
  font-size: 13px;
  font-weight: 400;
  font-family: Montserrat;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  color: #0f52ba;
`;

const Quantity = styled.span`
  margin: 0 5px;
`;

const ProductPrice = styled.p`
  font-family: Montserrat;
  margin-right: 25px;
`;

const TotalPrice = styled.div`
background-color: red;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 28px;
    font-weight: 700;
    color: white;
  }
`;

const OrderFinalized = styled.div`
  background-color: black;
  width: 520px;
  height: 67px;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 30px;
  }
`;
