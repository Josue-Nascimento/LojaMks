import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsBagPlusFill } from "react-icons/bs";


export default function SectionProducts() {
    //I made a state to get the information from the API and made a map to render
  const [productsList, setProductsList] = useState([]);
  
  function SendtoCart(photo, price, name){
    const body = {
        photo: photo,
        price: price,
        name: name
    };
    console.log("Enviando dados:", body);
     const promisse = axios.post("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC",body)
     console.log(body)
      promisse.then((res) =>{
        console.log("Resposta do servidor:", res.data);
      })
      promisse.catch((error) => {
        console.error("Erro ao enviar dados:", error.response.data);
        // Lide com o erro aqui
    });
  }

  useEffect(() => {
    const promisse = axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
    );
    promisse.then((res) => {
      console.log(res.data);
      setProductsList(res.data.products);
    });
    promisse.catch((err) => {
      console.log(err.response);
     
    });
  }, []);

  return (
    <Container>
      {productsList.map((item) => (
        <ContainerProducts key={item.id}>
          <img src={item.photo} />
          <Price>
          <h2>
            {item.name}
          </h2>
          <span>R$ {item.price}</span>
          </Price>
          <p>{item.description}</p>
          <button onClick={()=> SendtoCart(item.photo, item.price, item.name)}>
            <BsBagPlusFill />
            Comprar
          </button>
        </ContainerProducts>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1000px;
  margin: 30px auto; /* Center the container */
  padding: 30px; /* Add padding to space the items from the container edges */
`;

const ContainerProducts = styled.div`
  width: 217.56px;
  height: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 5px #f2f2f2;
  margin: 10px;
  img {
    width: 111px;
    height: 138px;
    margin-bottom: 10px;
  }
  
  p {
    font-family: Montserrat;
    font-size: 10px;
    width: 192px;
    height: 25px;
    top: 216px;
    left: 14px;
    gap: 0px;
    opacity: 0px;
  }

  button {
    width: 218px;
    height: 31.91px;
    background-color: #0f52ba;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 30px;
    border-radius: 0px 0px 8px 8px;
  }
`;

const Price = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    h2 {
    font-family: Montserrat;
    width: 124px;
    height: 38px;
    top: 170px;
    left: 14px;
    gap: 0px;
    opacity: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    margin-bottom: 20px;


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
`
