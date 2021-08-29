import React, {useState} from "react";
import {Carousel, Image} from "antd";

export const ProductDetailCarrousel = ({images}) => {
  const [visible, setVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [slide, setSlide] = useState(0);

  const handlePreview = num => {
    setVisible(true);
    setAutoplay(false);
    setSlide(num);
  };

  const handleVisibleChange = vis => {
    setVisible(vis);
    setAutoplay(true);
  };

  const renderImage = () => {
    return images.map((image, idx) => (
      <Image
        key={idx}
        preview={{visible: false}}
        width='auto'
        src={image}
        alt={image}
        onClick={() => handlePreview(idx)}
      />
    ));
  };

  return (
    <>
      <Carousel autoplay={autoplay}>{renderImage()}</Carousel>
      <div style={{display: "none"}}>
        <Image.PreviewGroup preview={{visible, onVisibleChange: handleVisibleChange, current: slide}}>
          {images.map(image => (
            <Image key={image} src={image} alt={image} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};
