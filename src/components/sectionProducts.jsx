import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsBagPlusFill } from "react-icons/bs";
import Skeleton from 'react-loading-skeleton';

export default function SectionProducts({ setProductsSelected, productsSelected }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsList, setProductsList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        );
        setProductsList(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sendToCart = (photo, price, name) => {
    const newProduct = {
      photo: photo,
      price: price,
      name: name,
    };
    const exists = productsSelected.some(product => product.name === name);
    if (!exists) {
      console.log("Enviando dados:", newProduct);
      setProductsSelected((prevProducts) => [...prevProducts, newProduct]);
    } else {
      console.log("Este produto já foi adicionado ao carrinho.");
    }
  };

  return (
    <Container>
      {loading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <ContainerProducts key={index}>
            <Skeleton height={138} />
            <Price>
              <h2><Skeleton height={38} /></h2>
              <span><Skeleton width={64} /></span>
            </Price>
            <Skeleton count={2} />
            <button disabled>
              <BsBagPlusFillIcon />
              Comprar
            </button>
          </ContainerProducts>
        ))
      ) : error ? (
        <ErrorMessage>Ocorreu um erro ao carregar os produtos.</ErrorMessage>
      ) : (
        productsList.map((item) => (
          <ContainerProducts key={item.id}>
            <img src={item.photo} alt={item.name} />
            <Price>
              <h2>{item.name} <span>R$ {item.price}</span></h2>
              
            <p>{item.description}</p>
            </Price>
            <button onClick={() => sendToCart(item.photo, item.price, item.name)}>
              <BsBagPlusFillIcon />
              Comprar
            </button>
          </ContainerProducts>
          
        ))
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1000px; /* Adicionado para limitar a largura do contêiner */
  margin: 30px auto;
  padding: 30px;
`;

const ContainerProducts = styled.div`
  width: 217.56px;
  height: 285px;
  display: flex;
  flex-direction: column; /* Alterado para flex-direction: column para que os itens sejam empilhados verticalmente */
  align-items: center; /* Adicionado para centralizar os itens horizontalmente */
  justify-content: space-between; /* Adicionado para distribuir uniformemente o espaço entre os itens */
  border-radius: 5px;
  box-shadow: 1px 1px 1px 5px #f2f2f2;
  margin: 10px;

  img {
    width: 111px;
    height: 138px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: Montserrat;
    font-size: 10px;
    width: 192px;
    height: 25px;
    
     /* Adicionado para centralizar o texto */
  }

  button {
    width: 100%; /* Alterado para ocupar toda a largura do contêiner */
    height: 31.91px;
    background-color: #0f52ba;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: auto; /* Alterado para alinhar o botão na parte inferior */
    border-radius: 0px 0px 8px 8px;
  }
`;

const BsBagPlusFillIcon = styled(BsBagPlusFill)`
  margin-right: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

const Price = styled.div`
  display: flex;

  
  flex-direction: column;
 
  h2 {
    font-family: Montserrat;
    font-size: 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
  }

  span {
    background-color: #373737;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    color: white;
    font-size: 10px;
    font-family: Montserrat;
    font-weight: 700;
    border-radius: 5px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
  margin: 20px;
  text-align: center;
`;