import {useEffect, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {Layout, Menu, Breadcrumb, Card, BackTop, List, Statistic, Skeleton, Select, Button} from "antd";
import {SyncOutlined, PieChartOutlined, FileOutlined, TeamOutlined, ArrowUpOutlined} from "@ant-design/icons";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";

import articles from "../public/files/data.json";

const {Header, Content, Footer} = Layout;
const {Meta} = Card;

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {clothes} = articles;
    setData(clothes);
    setLoading(false);
  }, [data]);

  const handleClick = () => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>EShoppers</title>
        <meta name='description' content='The ecommerce of the people ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout style={{minHeight: "100vh"}}>
        <Layout>
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
          <Content style={{margin: "0 16px"}}>
            {loading ? <Skeleton /> : <BackTop />}
            {data.length > 0 && (
              <List
                loading={loading}
                grid={{gutter: 16, xs: 1, md: 2, lg: 3, xl: 4}}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card
                      style={{marginTop: 16}}
                      onClick={handleClick}
                      hoverable
                      cover={
                        <Image alt={item.name} src={item.images[0]} layout='responsive' width={500} height={500} />
                      }>
                      <Meta
                        title={item.name}
                        description={<Statistic value={item.price} valueStyle={{color: "#3f8600"}} prefix='COP$' />}
                      />
                    </Card>
                  </List.Item>
                )}
              />
            )}
          </Content>
          <Footer style={{textAlign: "center"}}>The ecommerce of the people</Footer>
        </Layout>
      </Layout>
    </>
  );
}
