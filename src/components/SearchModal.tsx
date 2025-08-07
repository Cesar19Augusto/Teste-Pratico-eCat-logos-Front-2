import { useState } from "react";
import styled from "styled-components";
import { TbArrowsUpDown } from "react-icons/tb";

const Container = styled.div`
  display: flex;
  font-family: Roboto;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconCircle = styled.div`
  background-color: #5da0ad;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductTop = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const Label = styled.span`
  font-size: 14px;
  color: #333;
`;

const Ref = styled.span`
  color: #000000;
  font-size: 12px;
`;

const Price = styled.span`
  color: #000000;
  font-size: 14px;
`;

const CounterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CircleButton = styled.button`
  background-color: #809caa;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
`;

const QuantityBox = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #b8d7e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #809CAA;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding: 0 3.5rem;
`;

const FooterItem = styled.div`
  text-align: center;
`;

const FooterLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

const FooterValue = styled.div`
  font-size: 12px;
  color: #666;
`;

const SearchModal = () => {
  const [quantity, setQuantity] = useState(0);
  const unitPrice = 69.0;
  const packValue = unitPrice * 10;
  const total = quantity * packValue;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Container>
      <Header>
        <IconCircle>
          <TbArrowsUpDown size={20} />
        </IconCircle>
        <ProductInfo>
          <ProductTop>
            <Label>Jaqueta</Label>
            <Ref>REF: 20.09.0000</Ref>
            <Price>{formatCurrency(unitPrice)}</Price>
          </ProductTop>
        </ProductInfo>
      </Header>

      <Footer>
        <FooterItem>
          <FooterLabel>Atual</FooterLabel>
          <FooterValue>{formatCurrency(total)}</FooterValue>
        </FooterItem>

        <CounterSection>
          <CircleButton onClick={decreaseQuantity}>-</CircleButton>
          <QuantityBox>{quantity}</QuantityBox>
          <CircleButton onClick={increaseQuantity}>+</CircleButton>
        </CounterSection>

        <FooterItem>
          <FooterLabel>Acumulado</FooterLabel>
          <FooterValue>{formatCurrency(total)}</FooterValue>
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default SearchModal;
