import {Statistic, Avatar} from "antd";

export const ProductPrice = ({price, color, size}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Statistic value={price} valueStyle={{color: "#3f8600"}} prefix='COP$' />
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: "middle",
          color: color === "White" ? "black" : "white",
        }}>
        {size}
      </Avatar>
    </div>
  );
};
