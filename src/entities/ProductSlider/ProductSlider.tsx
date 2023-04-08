import React, {useState} from "react";
import Image from "next/image";
import styles from "./ProductSlider.module.scss"

interface ImageSliderProps {
    images: string[];
}

export const ProductSlider: React.FC<ImageSliderProps> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const sliderImageWidth = 320;
    const sliderImageHeight = 426;

    return (
        <div className={styles.imageSlider}>
            <div
                className={styles.slides}
                style={{transform: `translateX(-${currentSlide * 100}%)`}}
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <Image
                            src={image}
                            alt={`Превью ${index}`}
                            width={sliderImageWidth}
                            height={sliderImageHeight}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Миниатюра ${index}`}
                        className={`${styles.thumbnail} ${
                            index === currentSlide ? styles.active : ""
                        }`}
                        onClick={() => goToSlide(index)}
                        width={60}
                        height={60}
                    />
                ))}
            </div>
        </div>
    );
};
