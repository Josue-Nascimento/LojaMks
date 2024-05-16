import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ListCart({ productsSelected, setProductsSelected }) {
  // State to store the total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Effect to update the total price when the selected products change
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [productsSelected]);

  // Function to remove a product from the cart
  const removeProduct = (index) => {
    // Display a confirmation message to the user
    const confirmation = window.confirm(
      "Tem certeza que deseja remover esse item?"
    );

    // Check if the user confirmed the removal
    if (confirmation) {
      setProductsSelected((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (product, i) => i !== index
        );
        return updatedProducts;
      });
    }
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (index, increment) => {
    setProductsSelected((prevProducts) => {
      const updatedProducts = prevProducts
        .map((product, i) => {
          if (i === index) {
            const newQuantity = product.quantity + increment;
            // Check if the new quantity will be greater than 0
            if (newQuantity > 0) {
              return {
                ...product,
                quantity: newQuantity,
              };
            } else {
              // Display a confirmation message before removing the item
              const confirmation = window.confirm(
                "Tem certeza que deseja remover esse item?"
              );
              if (confirmation) {
                return null;
              } else {
                return product; // Keep the product in the list
              }
            }
          }
          return product;
        })
        .filter(Boolean); // Remove null items from the list
      setTotalPrice(calculateTotalPrice(updatedProducts)); // Update the totalPrice
      return updatedProducts;
    });
  };

  // Function to calculate the total price of the selected products
  const calculateTotalPrice = (products = productsSelected) => {
    // Calculate the totalPrice as the sum of the total prices of all products in the list
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  // Render the component
  return (
    <>
      <ProductList>
        {productsSelected.map((product, index) => (
          <ProductItem key={index}>
            <CloseIconProductList onClick={() => removeProduct(index)} />
            <ProductImage src={product.photo} />
            <ProductName>{product.name}</ProductName>
            <QuantityControls>
              <QuantityButton onClick={() => updateQuantity(index, -1)}>
                -
              </QuantityButton>
              <Quantity>{product.quantity}</Quantity>
              <QuantityButton onClick={() => updateQuantity(index, 1)}>
                +
              </QuantityButton>
            </QuantityControls>

            <ProductPrice>R${product.price * product.quantity}</ProductPrice>
          </ProductItem>
        ))}
      </ProductList>
      <TotalPrice> 
        <p>Total:</p>
        <p>R${totalPrice}</p>
      </TotalPrice>
      <OrderFinalized>
        <h1>Finalizar compra</h1>
      </OrderFinalized>
    </>
  );
}
const ProductList = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
  overflow-y: auto;

  @media (max-width: 667px) {
    width: 80%;
    margin-left: 40px;
  }
`;

const ProductItem = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  width: 400px;
  height: 95px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 667px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 46px;
  height: 57px;
  @media (max-width: 667px) {
  margin-left: 10px;
}
`;

const ProductName = styled.h2`
  width: 100px;
  font-size: 13px;
  font-weight: 400;
  font-family: Montserrat;
  color: black;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #c5baba;
`;

const QuantityButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Quantity = styled.span`
  width: 15px;
  box-shadow: 0px 0px 0px 1px #c5baba;
  font-size: 10px;
  margin: 0.5px;
  color: black;
  font-family: 'Courier New', Courier, monospace;
 
`;

const ProductPrice = styled.p`
  font-family: Montserrat;
  margin-right: 25px;
  color: black;
  font-weight: 600;
  @media (max-width: 667px) {
  margin-left: 20px;
}
`;

const CloseIconProductList = styled(IoMdCloseCircle)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000; /* Altere a cor conforme necessário */
`;

const TotalPrice = styled.div`
  width: 108%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  p  {
    width: 100% !important;
    margin-bottom: 90px !important;
    font-size: 28px !important;
    line-height: 15px !important;
    font-weight: 700 !important;
    color: white !important;
    padding: 5px 10px !important;
    margin-top: 10px !important;
    @media (max-width: 667px) {
    width: 100%;
    font-size: 23px !important;
    margin-left: 35px;
  
}
  }


`;

const OrderFinalized = styled.div`
  width: 100%;
  color: white;
  position: absolute; /* Altera para position: absolute */
  right: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 39px;

 

  h1 {
    background-color: black;
    width: 100%;
    height: 67px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 667px) {
    font-size: 25px;
    margin-left: 100px;
  }
  }
`;
