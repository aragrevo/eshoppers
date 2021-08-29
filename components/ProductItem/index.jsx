import Image from "next/image";
import {Card, Avatar, List, Statistic} from "antd";
const {Meta} = Card;

export const ProductItem = ({handleSelectProduct, product}) => {
  console.log("Render Product");
  return (
    <List.Item>
      <Card
        style={{marginTop: 16}}
        onClick={() => handleSelectProduct(product)}
        hoverable
        cover={<Image alt={product.name} src={product.images[0]} layout='responsive' width={500} height={500} />}>
        <Meta
          title={product.name}
          description={
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <Statistic value={product.price} valueStyle={{color: "#3f8600"}} prefix='COP$' />
              <Avatar style={{backgroundColor: "#3f8600", verticalAlign: "middle"}}>{product.size}</Avatar>
            </div>
          }
        />
      </Card>
    </List.Item>
  );
};
