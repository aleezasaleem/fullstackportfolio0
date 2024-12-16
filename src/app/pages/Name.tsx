import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "@/app/styles/main.css";
const Name = () => {
  return (
    <>
      <Box pt={{ base: 5, sm: 10, md: 12 }}>
        <Container>
          <Stack>
            <Text
              fontWeight={"bold"}
              textStyle={{ base: "4xl", sm: "5xl", md: "6xl" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              &lt;Aleeza /<span className="animate-color">&gt;</span>
            </Text>
          </Stack>
        </Container>
      </Box>
      <br />
    </>
  );
};

export default Name;
