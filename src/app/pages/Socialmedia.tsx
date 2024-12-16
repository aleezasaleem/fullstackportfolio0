import {
  Container,
  Text,
  Stack,
  Link,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";

export const SocialMedia = () => {
  const iconSize = useBreakpointValue({ base: "30px", md: "40px" });

  return (
    <Container maxW="container.lg" py={6}>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        mb={4}
        textAlign="center"
        color="teal.600"
      >
        Social Media
      </Text>

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
            <CiMail size={iconSize} />
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="https://www.facebook.com/people/Aleeza-Saleem/pfbid02FjHA8U1ipFwRH6ss7facko19UAu6FdLPpXMsa7xGEALX9EZhHxYaKJg5GRyBWt8Kl/"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
          >
            <FaFacebook size={iconSize} style={{ color: "#0077B5" }} />
          </Link>
        </Box>

        <Box p={1}>
          <Link
            href="https://wa.me/+923277017680"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practices for external links
          >
            <IoLogoWhatsapp size={iconSize} style={{ color: "#25D366" }} />
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};
