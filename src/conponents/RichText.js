import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const RichText = ({ heading, text }) => {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2.5rem" w="100%">
          {heading && heading}
        </Heading>
        <Text pb="3rem" w="100%">
          {text && text}
        </Text>
      </Center>
    </Box>
  );
};

export default RichText;
