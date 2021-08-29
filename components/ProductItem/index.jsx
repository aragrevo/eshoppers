import React from "react";
import Image from "next/image";

import {Card, List} from "antd";
import {ProductPrice} from "../ProductPrice";

const {Meta} = Card;

const ProductItem = ({handleSelectProduct, product}) => {
  return (
    <List.Item>
      <Card
        style={{marginTop: 16}}
        onClick={() => handleSelectProduct(product)}
        hoverable
        cover={<Image alt={product.name} src={product.images[0]} layout='responsive' width={500} height={500} />}>
        <Meta
          title={product.name}
          description={<ProductPrice price={product.price} color={product.color} size={product.size} />}
        />
      </Card>
    </List.Item>
  );
};

export default React.memo(ProductItem);
