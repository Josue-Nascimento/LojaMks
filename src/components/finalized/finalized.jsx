import styled from "styled-components";

export default function Finalized({ productsSelected, totalPrice }) {
  return (
    <>
      <Container>
        <ContainerFinishedProducts>
          <h1>Compra finalizada com sucesso!</h1>
          {productsSelected.map((item, index) => (
            <FinishedProducts key={index}>
              <img src={item.photo} alt={item.name} />
              <InfoProduct>
                <h2>
                  {item.name} <br />
                </h2>
                <p>
                  Quantidade:{item.quantity}
                  <span> R${item.price * item.quantity} </span>
                </p>
              </InfoProduct>

              <p className="description">{item.description}</p>
            </FinishedProducts>
          ))}
          <p className="productPriceTotal">
            Valor total da compra R${totalPrice}
          </p>
        </ContainerFinishedProducts>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ContainerFinishedProducts = styled.div`
  background-color: white;
  width: 80%;
  height: 80%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;

  @media (max-width: 667px) {
    width: 80%;
    margin-left: 40px;
    margin-bottom: 25px;
    height: 60%;
  }

  h1 {
    width: 65%;
    color: #2f9970 !important;
    font-size: 17px !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    display: flex;
    margin-right: 50px;
    align-items: center;
  }
  .productPriceTotal {
    color: #2f9970;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const FinishedProducts = styled.div`
  width: 90%;

  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 5px 5px #d4d2d2;
  border-radius: 10px;

  margin-bottom: 20px;
  img {
    border-radius: 10px;
    width: 50px;
  }
`;
const InfoProduct = styled.div`
  h2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30px;
    font-size: 15px;
    color: black;
    position: relative;
    margin-top: 5px;

    @media (max-width: 667px) {
    }
  }

  p {
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400 !important;
    font-size: 10px !important;
    color: black;
    left: 10px !important;
  }
  span {
    font-size: 10px !important;
    font-weight: 400 !important;
  }
`;
