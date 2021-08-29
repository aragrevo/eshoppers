import {Typography, List, Divider} from "antd";
const {Text} = Typography;

export const ProductDescription = ({title, content, features}) => {
  return (
    <>
      <Divider orientation='left'>{title}</Divider>
      <Text>{content}</Text>
      <List
        size='small'
        header={null}
        footer={null}
        dataSource={features}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </>
  );
};
