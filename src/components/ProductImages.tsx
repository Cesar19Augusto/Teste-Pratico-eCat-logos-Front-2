import styled from "styled-components";
import { GoInfo } from "react-icons/go";
import { SlMagnifier, SlBasket } from "react-icons/sl";
import Jaqueta1 from "../assets/Jaqueta ft 1.png";
import Jaqueta2 from "../assets/Jaqueta ft 2.png";
import Jaqueta3 from "../assets/Jaqueta ft 2.png";

interface ProductImagesProps {
    onSelectImage: (imageUrl: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const IconCircle = styled.div`
  background-color: #809caa;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.div`
  width: 44px;
  height: 44px;
  gap: 5px;
  border: 2px solid #b8d7e0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImageThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.span`
  font-size: 12px;
  color: #888;
`;

const Divider = styled.hr`
  width: 85%;
  border: none;
  border-top: 2px solid #CCD0CF;
`;

const ProductImages = ({ onSelectImage }: ProductImagesProps) => {
    const imageUrls = [Jaqueta1, Jaqueta2, Jaqueta3];

    return (
        <Container>
            <TopSection>
                <IconGroup>
                    <IconCircle><GoInfo size={20} /></IconCircle>
                    <IconCircle><SlMagnifier size={20} /></IconCircle>
                </IconGroup>
                <ImageGroup>
                    {imageUrls.map((url, index) => (
                        <ImageBox key={index} onClick={() => onSelectImage(url)}>
                            <ImageThumb src={url} alt={`Imagem ${index + 1}`} />
                        </ImageBox>
                    ))}
                </ImageGroup>
                <IconGroup>
                    <IconCircle><SlBasket size={20} /></IconCircle>
                </IconGroup>
            </TopSection>
            <Label>Preços ilustrativos</Label>
            <Divider />
        </Container>
    );
};

export default ProductImages;
