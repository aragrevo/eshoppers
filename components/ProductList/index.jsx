import {List, Modal} from "antd";
import {useState} from "react";
import {ProductItem} from "../ProductItem";

export const ProductList = ({loading, products}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState(undefined);

  const handleClick = item => {
    setProduct(item);
    setIsModalVisible(true);
  };

  return (
    <>
      <List
        loading={loading}
        grid={{gutter: 16, xs: 1, md: 2, lg: 3, xl: 4}}
        dataSource={products}
        renderItem={item => <ProductItem handleSelectProduct={handleClick} product={item} />}
      />
      <Modal
        centered
        title={product?.name}
        footer={null}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}>
        <p>{JSON.stringify(product)}</p>
      </Modal>
    </>
  );
};
