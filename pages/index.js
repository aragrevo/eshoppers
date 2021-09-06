import {useEffect, useState} from "react";
import Head from "next/head";

import {Layout, BackTop, Skeleton} from "antd";

import {CustomHeader} from "../components/CustomHeader/CustomHeader";
import ProductList from "../components/ProductList";

import products from "../public/files/data.json";
import allProducts from "../public/files/products.json";

const {Content, Footer} = Layout;

const buildProducts = () => {
  const references = [];
  const {clothes} = products;

  const inStore = allProducts.filter(product => product?.sizes.length);
  return inStore
    .map(product => {
      references.push(product.reference);
      const current = clothes.find(p => p.ref === product.reference);
      if (current) {
        return {
          ...current,
          colorHex: product.colorHex?.replace("background-color: ", ""),
          sizes: product.sizes,
        };
      }
      return {
        name: product.name,
        ref: product.reference,
        size: null,
        color: product.color,
        gender: product.gender,
        price: product.price_amount,
        category: product.cagetory,
        quantity: 0,
        images: [product.cover?.origin],
        description: {
          title: null,
          content: product.description_short,
          features: [],
        },
        colorHex: product.colorHex?.replace("background-color: ", ""),
        sizes: product.sizes,
      };
    })
    .concat(clothes.filter(p => !references.includes(p.ref)))
    .sort((a, b) => (a.quantity < b.quantity ? 1 : -1));
};

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newProducts = buildProducts();
    setData(newProducts);
    setLoading(false);
  }, []);

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
