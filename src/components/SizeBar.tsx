import styled from 'styled-components';

const SizeBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #809CAA;
  padding:  20px 40px; 
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top: 1px solid #000000;
`;

const SizeItem = styled.div`
  display: inline-block;
  position:relative;
  align-items: center;
  margin-left: 4px;
`;

const SizeCircle = styled.div`
  background-color: #809CAA;
  position: absolute;
  top: -19px;
  right: -16px;
  color: #ffffff;
  font-weight: bold;
  width: 30px;
  height: 30px;
  font-size: 0.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
`;

const QuantityBox = styled.div`
  background-color: #ffffff;
  color: #809CAA;
  font-weight: bold;
  padding: 4px 14px;
  border-radius: 4px;
  font-size: 1rem;
`;

const QuantityBoxPack = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: -3px;
  left: 300%;
  color: #809CAA;
  font-weight: bold;
  padding: 4px 14px;
  border-radius: 4px;
  font-size: 1rem;

`;

const TotalSection = styled.div`
  position: relative;
  display: inline-block;
  gap: 4px;
  font-weight: bold;
  color: #ffffff;
`;

const PackText = styled.span`
  position: absolute;
  top: -14px;
  left: 550%;
  transform: translateX(-50%);
  font-size: 0.5rem;
  color: #ffffff;
`;


const SizeBar = () => {
  return (
    <>
      <SizeBarContainer>
        <SizeItem>
          <SizeCircle>P</SizeCircle>
          <QuantityBox>4</QuantityBox>
        </SizeItem>
        <SizeItem>
          <SizeCircle>M</SizeCircle>
          <QuantityBox>1</QuantityBox>
        </SizeItem>
        <SizeItem>
          <SizeCircle>G</SizeCircle>
          <QuantityBox>4</QuantityBox>
        </SizeItem>
        <SizeItem>
          <SizeCircle>GG</SizeCircle>
          <QuantityBox>1</QuantityBox>
        </SizeItem>
        <TotalSection>
          <span>=</span>
          <PackText>PACK</PackText>
          <QuantityBoxPack>10</QuantityBoxPack>
        </TotalSection>
      </SizeBarContainer>
    </>
  );
};

export default SizeBar;