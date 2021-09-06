import {Statistic, Avatar} from "antd";

export const ProductPrice = ({price, color, size, sizes}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Statistic value={price} valueStyle={{color: "#3f8600"}} prefix='COP$' />
      {sizes ? (
        <div>
          {sizes.map((sz, idx) => (
            <Avatar
              key={idx}
              style={{
                backgroundColor: color,
                verticalAlign: "middle",
                color: color === "#ffffff" ? "black" : "white",
                border: color === "#ffffff" ? "1px solid black" : null,
              }}>
              {sz}
            </Avatar>
          ))}
        </div>
      ) : (
        <Avatar
          style={{
            backgroundColor: color,
            verticalAlign: "middle",
            color: color === "#ffffff" ? "black" : "white",
            border: color === "#ffffff" ? "1px solid black" : null,
          }}>
          {size}
        </Avatar>
      )}
    </div>
  );
};
