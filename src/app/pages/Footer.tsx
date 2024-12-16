import React from "react";
import { Box, Container, Text, Stack, Link } from "@chakra-ui/react"; // Ensure all necessary Chakra components are imported
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const iconSize = "24px"; // Size of the icons (you can adjust this as needed)

  return (
    <Container maxW="container.lg" py={6}>
      {/* Social Media Icons */}
      <Stack
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium and up
        spacing={6}
        justify="center" // Center icons horizontally
        align="center" // Center icons vertically
        px={{ base: 4, md: 0 }} // Add padding on smaller screens
      >
        <Box p={1}>
          <Link
            href="https://www.instagram.com"
            isExternal
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
          >
            <FaInstagram size={iconSize} style={{ color: "#C13584" }} />
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="https://www.linkedin.com/in/aleeza-saleem-509b37259/"
            isExternal
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
          >
            <FaLinkedin size={iconSize} style={{ color: "#0077B5" }} />
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="mailto:aleezasaleem182@gmail.com"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
          >
            <CiMail size={iconSize} style={{ color: "#D44638" }} />{" "}
            {/* Red color for email */}
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="https://www.facebook.com/people/Aleeza-Saleem/pfbid02FjHA8U1ipFwRH6ss7facko19UAu6FdLPpXMsa7xGEALX9EZhHxYaKJg5GRyBWt8Kl/"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
          >
            <FaFacebook size={iconSize} style={{ color: "#1877F2" }} />{" "}
            {/* Blue color for Facebook */}
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="https://wa.me/+923277017680"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practices for external links
          >
            <IoLogoWhatsapp size={iconSize} style={{ color: "#25D366" }} />{" "}
            {/* Green color for WhatsApp */}
          </Link>
        </Box>
      </Stack>
      <br />
      <Text fontWeight="bold" mb={4} textStyle="sm" color="teal.600">
        Project by Aleeza Saleem © 2024
      </Text>
    </Container>
  );
};

export default Footer;
