import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";


export default function HeaderTop(){
    return(
        <>
        <Header>
          <h1>
            MKS <span>Sistemas</span>
          </h1>
          <CartButtom>
            <FaCartPlus /> <p>0</p>
          </CartButtom>
        </Header>
      </>
    )
}

const Header = styled.div`
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  left: 65px;
  gap: 0px;
  opacity: 0px;
  top: 28px;
  font-family: Montserrat;
  color: white;

  h1 {
    font-size: 30px;
    margin-left: 50px;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    font-weight:100
  }
`;

const CartButtom = styled.button`
  width: 90px;
  height: 45px;
  border: none;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  p {
    width: 20px;
    font-size: 10px;
    font-weight: bolder;
  }
`;
