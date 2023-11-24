import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

const ImageGallery = () => {
  const [images, setImages] = useState([]); //хранит изображения
  const [currentImageIndex, setCurrentImageIndex] = useState(0); //хранит индекс


  const { isError, error, data, isLoading } = useFetchData({
    endpoint: "imageGallery",
    options: {
      method: "GET",
    },
  });

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages(uploadedImages); //извлекает изображения
    setCurrentImageIndex(0); //сбрасывает индекс, чтобы отобразить 1 изображение
  };

  const handleNextImage = () => { //переключает изображения на след
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length //для цикличности
    );
  };

  const handlePredImage = () => { //переключает изображения на пред
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length //для цикличности
    );
  };

  return (
    <div className="image-gallery">
      <input 
        className="dropzone"
        type="file"
        accept="/imageGallery/*"
        multiple
        onChange={handleImageUpload}
      />
      {images.length > 0 && (
        <>
        <div className="image-container">
          <img
            src={URL.createObjectURL(images[currentImageIndex])}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePredImage}>&lt;</button>
          <button onClick={handleNextImage}>&gt;</button>
        </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;