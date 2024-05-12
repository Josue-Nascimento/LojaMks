import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";


export default function ListCart({ productsSelected, setProductsSelected }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcula o totalPrice sempre que productsSelected mudar
    calculateTotalPrice();
  }, [productsSelected]);

  const removeProduct = (index) => {
    setProductsSelected((prevProducts) => {
      // Remova o produto do array de produtos selecionados
      const updatedProducts = prevProducts.filter((product, i) => i !== index);

      // Atualiza o totalPrice após a remoção do produto
      const newTotalPrice = calculateTotalPrice(updatedProducts);
      setTotalPrice(newTotalPrice);

      return updatedProducts;
    });
  };

  const updateQuantity = (index, increment) => {
    setProductsSelected((prevProducts) => {
      const updatedProducts = prevProducts.map((product, i) => {
        if (i === index) {
          const newQuantity = product.quantity + increment;
          return {
            ...product,
            quantity: newQuantity >= 1 ? newQuantity : 1 // Garante que a quantidade nunca seja menor que 1
          };
        }
        return product;
      });

      setTotalPrice(calculateTotalPrice(updatedProducts)); // Atualiza o totalPrice

      return updatedProducts;
    });
  };

  const calculateTotalPrice = (products = productsSelected) => {
    // Calcula o totalPrice como a soma dos preços totais de todos os produtos na lista
    return products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  };

  return (
    <>
      <ProductList>
        {productsSelected.map((product, index) => (
          <ProductItem key={product.id}>
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
      <TotalPrice><p>Total: </p><p>R${totalPrice}</p></TotalPrice>
    </>
  );
}
const ProductList = styled.div`
  height: 65%;
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
  position: relative;
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
font-size: 10px;
  margin: 0 5px;
`;

const ProductPrice = styled.p`
  font-family: Montserrat;
  margin-right: 25px;
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
     width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;

  p {
  background-color: #0f52ba;
height: 40px;
    font-size: 28px;
    font-weight: 700;
    color: white;
    position: relative;
  }
    
`;