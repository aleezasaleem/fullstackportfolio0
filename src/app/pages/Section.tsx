import { Container, Box, Text, Grid, Button, Flex } from "@chakra-ui/react";
import AleezaAnim from "@/app/images/aleeza.png";
import Image from "next/image";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import "../styles/anim.css";
import { AboutMe } from "./AboutMe";
import Link from "next/link";
import { PiCertificateFill } from "react-icons/pi";

const Section = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "Web Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "MERN Developer",
        "Freelancer",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      typingSpeed: 100,
      backSpeed: 50,
      backDelay: 500,
      pauseFor: 1000,
      cursor: "|",
      cursorSpeed: 100,
      fadeOut: true,
      fadeOutDelay: 500,
    });
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        <Box>
          <Text textStyle="2xl" mb={4}>
            <span
              style={{
                animation: "waveAnimation 2s infinite",
                display: "inline-block",
                fontSize: "2rem",
              }}
            >
              👋🏻
            </span>{" "}
            Hello, I'm
          </Text>

          <Text
            fontWeight="bold"
            textStyle={{ base: "4xl", sm: "5xl", md: "6xl" }}
            textAlign={{ base: "center", sm: "left" }}
          >
            &lt;Aleeza/<span className="animate-color">Saleem&gt;</span>
          </Text>
          <br />

          <div
            id="typewriter"
            style={{
              fontWeight: "bold",
              fontSize: "44px",
              fontFamily: "'Courier New', Courier, monospace",
              backgroundImage:
                "linear-gradient(45deg, #ff6a00, #ee0979, #ff00b0)",
              backgroundClip: "text",
              color: "transparent",
              animation:
                "gradientAnimation 5s linear infinite, zoomAnimation 3s ease-in-out infinite",
            }}
          />

          <Text
            textAlign={"justify"}
            letterSpacing={1}
            lineHeight={2}
            textTransform="Capitalize"
            padding={2}
            mt={4}
            fontStyle={"italic"}
          >
            "Hi, I'm <span style={{ color: "red" }}>Aleeza</span>, a passionate
            web developer with expertise in building responsive, user-friendly
            websites. I specialize in both front-end and back-end technologies,
            ensuring seamless and visually appealing digital experiences. My
            focus is on delivering websites that are not only functional but
            also engaging, helping businesses grow and connect with their
            audience effectively. With a strong foundation in HTML, CSS,
            JavaScript, and modern frameworks like React, I create websites that
            are not only aesthetically pleasing but also optimized for
            performance across all devices. I am dedicated to staying updated
            with the latest industry trends and best practices to deliver
            high-quality solutions that exceed client expectations."
          </Text>
          <br />
          <Box>
            <Flex
              align="center"
              justify="space-evenly"
              gap={4}
              direction={{ base: "column", sm: "row" }}
              mt={4}
            >
              <a
                href="/resume/Aleeza_ATS.pdf"
                download="AleezaSaleem_Resume.pdf"
              >
                <Button
                  style={{ border: "1px solid green" }}
                  colorScheme="teal"
                  size="lg"
                  variant="outline"
                  width={{ base: "100%", sm: "auto" }}
                >
                  Resume
                  <HiOutlineDocumentArrowDown />
                </Button>
              </a>
              <AboutMe />
              <Button variant="outline" width={{ base: "100%", sm: "auto" }}>
                <Link href="/Certi">Certificate</Link>
                <PiCertificateFill style={{ color: "orange" }} />
              </Button>
            </Flex>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" p={2}>
          <Image
            src={AleezaAnim}
            alt="Aleeza Animation"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Section;
