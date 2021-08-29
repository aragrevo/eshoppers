import {Modal} from "antd";
import ProductDetail from "../ProductDetail";

export const ModalProduct = ({visible, onCancel, product}) => {
  console.log("Render ModalProduct");
  return (
    <Modal centered title={null} footer={null} visible={visible} onCancel={onCancel}>
      <ProductDetail product={product} />
    </Modal>
  );
};
