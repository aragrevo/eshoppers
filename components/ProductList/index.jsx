import React, {useCallback, useState} from "react";
import {List} from "antd";
import ProductItem from "../ProductItem";
import {ModalProduct} from "../ModalProduct";

const ProductList = ({loading, products}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState(undefined);

  const handleClick = useCallback(item => {
    setProduct(item);
    setIsModalVisible(true);
  }, []);

  return (
    <>
      <List
        loading={loading}
        grid={{gutter: 16, xs: 1, md: 2, lg: 3, xl: 4}}
        dataSource={products}
        renderItem={item => <ProductItem handleSelectProduct={handleClick} product={item} />}
      />
      <ModalProduct visible={isModalVisible} onCancel={() => setIsModalVisible(false)} product={product} />
    </>
  );
};

export default React.memo(ProductList);
