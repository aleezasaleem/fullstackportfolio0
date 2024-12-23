"use client"
import React from "react";
import Projects from "./Projects"; // Assuming this contains an array of 14 project objects.
import Image from "next/image";
import Link from "next/link"; // Correct import of Link from next.js
import { Box, Button, Container, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion"; // For scroll animation

// Custom arrow components for slider navigation (optional for now)
const Arrow = ({ direction, onClick }) => (
  <Box
    onClick={onClick}
    position="absolute"
    top="50%"
    transform="translateY(-50%)"
    zIndex="10"
    bg="transparent"
    p="10px"
    cursor="pointer"
    color="white"
    fontSize="30px"
    fontWeight="bold"
    style={{
      [direction === "next" ? "right" : "left"]: "10px", // Position left or right arrow
    }}
  >
    {direction === "next" ? "→" : "←"}
  </Box>
);

const Work = () => {
  return (
    <Container maxW="container.xl" p={4} id="project">
      <hr />
      <br />
      <Box mb={6}>
        <Text textStyle="4xl" fontWeight="bold">
          My <span style={{ color: "red" }}>Pro</span>
          jects
        </Text>
      </Box>

      {/* Grid setup for displaying rows of 2 cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 card per row on small screens, 2 on larger screens
        spacing={8} // Add space between cards
        p="20px"
      >
        {/* Loop through Projects array, ensuring we show 2 cards per row */}
        {Projects.map((elem, index) => (
          <motion.div
            key={elem.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              position="relative"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              }} // Hover effect with scale
              bg="transparent" // Removing white background
              p="5"
              marginBottom="20px" // Add margin bottom for spacing between rows
            >
              <Box position="relative" width="100%" height="250px" mb={4}>
                <Image
                  src={elem.images}
                  alt={`Project ${elem.id}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  _hover={{ bg: "teal.600" }} // Hover effect on button
                >
                  {/* Directly apply target="_blank" and rel="noopener noreferrer" on Link */}
                  <Link
                    href={elem.domain}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Website {elem.id}
                  </Link>
                </Button>
              </Box>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Work;
