import {useEffect, useState} from "react";
import Head from "next/head";

import {Layout, BackTop, Skeleton} from "antd";

import {CustomHeader} from "../components/CustomHeader/CustomHeader";
import ProductList from "../components/ProductList";

import products from "../public/files/data.json";
const {Content, Footer} = Layout;

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {clothes} = products;
    setData(clothes);
    setLoading(false);
  }, [data]);

  return (
    <>
      <Head>
        <title>EShoppers</title>
        <meta name='description' content='The ecommerce of the people ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout style={{minHeight: "100vh"}}>
        <Layout>
          <CustomHeader />
          <Content style={{margin: "0 16px"}}>
            {loading ? <Skeleton /> : <BackTop />}
            {data.length > 0 && <ProductList loading={loading} products={data} />}
          </Content>
          <Footer style={{textAlign: "center"}}>The ecommerce of the people</Footer>
        </Layout>
      </Layout>
    </>
  );
}
