import {Layout, Menu} from "antd";
import Link from "next/link";

const {Header} = Layout;

export const CustomHeader = () => {
  return (
    <Header style={{padding: 0}}>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["home"]}>
        <Menu.Item key='home'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key='woman'>
                <Link href='/woman'>
                  <a>Mujer</a>
                </Link>
              </Menu.Item>
              <Menu.Item key='man'>Hombre</Menu.Item> */}
      </Menu>
    </Header>
  );
};
