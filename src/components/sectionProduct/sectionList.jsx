import styled from "styled-components";
import { BsBagPlusFill } from "react-icons/bs";

export default function SectionList({
  productsList,
  setProductsSelected,
  productsSelected,
  Price,
}) {
  // Function to add a product to the cart.
  const sendToCart = (photo, price, name) => {
    const newProduct = {
      photo: photo,
      price: price,
      name: name,
      quantity: 1,
    };
    const exists = productsSelected.some((product) => product.name === name);
    if (!exists) {
      ("Enviando dados:", newProduct);
      setProductsSelected((prevProducts) => [...prevProducts, newProduct]);
    } else {
      window.confirm(
        "Esse item já foi adicionado no carrinho!"
      );
    }
  };
  return (
    <>
      {productsList.map((item) => (
        <ContainerProducts key={item.id}>
          <img src={item.photo} alt={item.name} />
          <Price>
            <h2>
              {item.name}
              <span>R${item.price}</span>
            </h2>

            <p className="description">{item.description}</p>
          </Price>
          <BuyDiv onClick={() => sendToCart(item.photo, item.price, item.name)}>
            <BsBagPlusFillIcon />
            Comprar
          </BuyDiv>
        </ContainerProducts>
      ))}
    </>
  );
}

const ContainerProducts = styled.div`
  width: 217.56px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 5px #ecebeb;
  margin: 10px;

  @media (max-width: 667px) {
    width: 40%;
    height: 80%;
    margin: 5px;

 
  }
  img {
    width: 111px;
    height: 138px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 667px) {
      width: 60px;
      height: 100px;
    }


  }

  .description{
    font-size: 10px;
    width: 192px;
    height: 25px;

    @media (max-width: 667px) {
    
      font-size: 7px;
      width: 140px;
      height: 25px;
    }
  }
`;

const BuyDiv = styled.div`
  width: 100%;
  height: 31.91px;
  background-color: #0f52ba;
  color: white;
 cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: auto;
  border-radius: 0px 0px 8px 8px;
`;

const BsBagPlusFillIcon = styled(BsBagPlusFill)`
  margin-right: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;
