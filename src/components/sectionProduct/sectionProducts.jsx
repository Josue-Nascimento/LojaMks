import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Skeleton from "react-loading-skeleton";
import SectionList from "./sectionList";

// This component renders the products section.
// When loading, it displays skeleton placeholders for product items.
// Once data is loaded, it renders the product items fetched from the API.
export default function SectionProducts({
  setProductsSelected,
  productsSelected,
  
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsList, setProductsList] = useState([]);

  // Fetches the product data from the API on component mount.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`
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

  return (
    <Container>
      {loading ? (
        <SkeletonContainer>
          {Array.from({ length: 8}).map((_, index) => (
            <SkeletonProduct key={index}>
              <img src={<Skeleton  />} />
              
              <SkeletonPrice>
                <h2>
                  <Skeleton  />
                </h2>
                <span>
                  <Skeleton />
                </span>
              </SkeletonPrice>
              <Skeleton  />
            </SkeletonProduct>
          ))}
        </SkeletonContainer>
      ) : error ? (
        <ErrorMessage>Ocorreu um erro ao carregar os produtos.</ErrorMessage>
      ) : (
        <SectionList
          Price={Price}
          productsSelected={productsSelected}
          setProductsSelected={setProductsSelected}
          productsList={productsList}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
 margin-top: 30px;
 margin-bottom: 30px;

  @media (max-width: 667px) {
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 667px) {
      font-size: 10px;
    }

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
   
    font-weight: 700;
    border-radius: 5px;
    margin-left: 5px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
  margin: 20px;
  text-align: center;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
 margin-top: 30px;
 margin-bottom: 30px;


 img {
  width: 111px;
    height: 138px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #ece3e3;

    @media (max-width: 667px) {
      width: 60px;
      height: 80px;
      margin-right: 30px;
    }
  }
  
`;
const SkeletonPrice = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    width: 100px;
    background-color: #ece3e3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  p{
    background-color: #ece3e3;
  }

    span{
      background-color: #ece3e3;
    }
  
`
const SkeletonProduct = styled.div`
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
    height: 25%;
    margin: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

 

`;
