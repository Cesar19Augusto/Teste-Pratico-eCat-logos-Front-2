import styled from 'styled-components';
import { SlArrowLeft } from "react-icons/sl";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";



const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #809CAA;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 08px; 
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const Title = styled.h1`
  color:#809CAA;
  font-family:Poppins;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CircleButton = styled.button`
  background-color: #f0f0f0;
  color:#809CAA;
  border: none;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            
            <BackButton onClick={() => window.history.back()}>
                <SlArrowLeft color="#ffffff" style={{ marginLeft: '20px' }}/>
            </BackButton>

            <IoIosArrowDropleftCircle size="1.5rem"color="#ffffff"/>
            <Title>(1) INVERNO FEMININO</Title>
            <IoIosArrowDroprightCircle size="1.5rem"color="#ffffff"/>

            <RightSection>
                <CircleButton>F</CircleButton>
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;
