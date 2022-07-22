import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";
import Hero from "../conponents/Hero";
import ImageWithText from "../conponents/ImageWithText";
import RichText from "../conponents/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;
  return (
    <Box>
      <Hero />
      <RichText
        heading="testestestestestesttestestestestestest"
        text="testestestestestesttestestestestestesttestestestestestesttestestestestestesttestestestestestest"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: 0.8 }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="18%" w="100%">
                {product.title}
              </Text>
              <Text position="absolute" bottom="10%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="examlpleexamlpleexamlpleexamlpleexa,mlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleex,amlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlple"
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="examlpleexamlpleexamlpleexamlpleexa,mlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleex,amlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlple"
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="examlpleexamlpleexamlpleexamlpleexa,mlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleex,amlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlpleexamlple"
      />
    </Box>
  );
};

export default Home;
