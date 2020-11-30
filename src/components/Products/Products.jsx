import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$5',
    image:
      'https://cdn.vox-cdn.com/thumbor/1kBiZHiB8FYJ1PE_KN5fnfD91kM=/0x0:4928x3264/1200x675/filters:focal(2345x1520:3133x2308)/cdn.vox-cdn.com/uploads/chorus_image/image/58204993/GettyImages_692780345.0.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: '$10',
    image:
      'https://i8.rozetka.ua/goods/17747559/apple_macbook_air_2020_512_silver_images_17747559073.jpg',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
