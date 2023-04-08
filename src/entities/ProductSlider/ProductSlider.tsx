import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductSlider.module.scss"

interface ImageSliderProps {
    images: string[];
}

export const ProductSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const sliderImageWidth = 600; // Задайте ширину основного изображения слайдера
    const sliderImageHeight = 300; // Задайте высоту основного изображения слайдера

    return (
        <div className={styles.imageSlider}>
            <Image src={images[currentSlide]} alt={`Превью ${currentSlide}`} width={sliderImageWidth} height={sliderImageHeight} />
            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Миниатюра ${index}`}
                        className={index === currentSlide ? styles.active : ""}
                        onClick={() => goToSlide(index)}
                        width={60}
                        height={60}
                    />
                ))}
            </div>
        </div>
    );
};
