import React from "react";

import {Typography} from "antd";
import {ProductDetailCarrousel} from "../ProductDetailCarrousel";
import {ProductPrice} from "../ProductPrice";
import {ProductDescription} from "../ProductDescription";

const {Title} = Typography;

const ProductDetail = ({product}) => {
  const {images, name, price, color, size, description} = product;

  return (
    <>
      <ProductDetailCarrousel images={images} />
      <div style={{padding: "1.5rem"}}>
        <Title level={4}>{name}</Title>
        <ProductPrice price={price} color={color} size={size} />
        <ProductDescription
          title={description?.title}
          content={description?.content}
          features={description?.features}
        />
      </div>
    </>
  );
};

export default React.memo(ProductDetail);
