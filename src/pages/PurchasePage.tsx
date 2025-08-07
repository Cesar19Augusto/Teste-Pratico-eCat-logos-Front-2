import { useState } from 'react';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import ProductImages from '../components/ProductImages';
import SearchModal from '../components/SearchModal';
import SizeBar from '../components/SizeBar';

const PurchasePage = () => {
    const [selectedImage, setSelectedImage] = useState("");
    return (
        <div>
            <Header />
            <ProductCarousel selectedImage={selectedImage} onChangeImage={setSelectedImage}  />
            <ProductImages onSelectImage={setSelectedImage} />
            <SearchModal />
            <SizeBar />
        </div>
    );
};

export default PurchasePage;
