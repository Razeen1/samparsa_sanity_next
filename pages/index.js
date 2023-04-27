import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Recommended For You</h2>
      <p>Some services you may like</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    {/* <div className="products-heading">
      <h2>Mason</h2>
      <p>Some mason services you may like</p>
    </div>
    <div className="products-container">
      {masons?.map((mason) => <Mason key={mason._id} product={mason} />)}
    </div> */}

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // const masonquery = '*[_type == "mason"]';
  // const masons = await client.fetch(masonquery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
