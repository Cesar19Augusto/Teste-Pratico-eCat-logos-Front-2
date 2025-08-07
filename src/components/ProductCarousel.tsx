import styled from 'styled-components';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Jaqueta1 from "../assets/Jaqueta ft 1.png";
import Jaqueta2 from "../assets/Jaqueta ft 2.png";

interface ProductCarouselProps {
  selectedImage: string;
  onChangeImage: (imageUrl: string) => void;
}

const Divider = styled.hr`
  width: 100%;
  margin-top: 0.5rem;
  border: none;
  border-top: 2px solid #809CAA;
`;

const ImagePreview = styled.img`
  max-width: 200px;
  height: auto;
  object-fit: contain;
  justify-content: center;
  margin: 0 45px;
`;

const ProductCarousel = ({ selectedImage, onChangeImage }: ProductCarouselProps) => {
  const imageUrls = [Jaqueta1, Jaqueta2];

  const currentIndex = imageUrls.indexOf(selectedImage);
  const index = currentIndex === -1 ? 0 : currentIndex;

  const handlePrev = () => {
    const prevIndex = (index - 1 + imageUrls.length) % imageUrls.length;
    onChangeImage(imageUrls[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % imageUrls.length;
    onChangeImage(imageUrls[nextIndex]);
  };

  return (
    <>
      <IoIosArrowDropleftCircle 
        size="2rem" 
        color="#809CAA" 
        style={{ marginLeft: "25px", marginBottom: "25px"}} 
        onClick={handlePrev} 
      />
      <ImagePreview src={selectedImage || imageUrls[0]} alt="Imagem Jaqueta" />
      <IoIosArrowDroprightCircle 
        size="2rem" 
        color="#809CAA" 
        style={{ marginLeft: "-20px", marginBottom: "25px"}} 
        onClick={handleNext} 
      />
      <Divider />
    </>
  );
};

export default ProductCarousel;

