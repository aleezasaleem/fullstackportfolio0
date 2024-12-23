import {
  Box,
  Button,
  HStack,
  Text,
  Container,
  Stack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerRoot,
} from "@/components/ui/drawer";
// Icons
import { FaHtml5, FaPython } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiSanity } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { Container as BootstrapContainer } from "react-bootstrap";
import { SiMui } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GiTBrick } from "react-icons/gi";
import Logo from "../images/ee.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const imageSize = useBreakpointValue({ base: "100%", md: "50%" });
  const MotionButton = motion(Button);
  return (
    <HStack wrap="wrap" justify="center" gap={4} m={5}>
      <DrawerRoot size="full">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <MotionButton
            colorScheme="teal"
            size="lg"
            variant="outline"
            m={3}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            About Me <FaArrowRightLong style={{ marginLeft: "8px" }} />
          </MotionButton>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ABOUT ME</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Text
              fontFamily={"Inter"}
              fontWeight="bold"
              fontSize={"16px"}
              lineHeight={1.5}
              letterSpacing={1}
              textTransform={"capitalize"}
            >
              I am a frontend web developer, proficient in front-end
              technologies, capable of building complete web applications from
              start to finish. My skill set includes languages and frameworks
              like HTML, CSS, JavaScript, TypeScript (and popular libraries like
              React and Next), as well as server-side languages like Node.js. I
              thrive on bringing ideas to life through clean, efficient code.
              <br />
              <br />
              "I help business owners and fellow web developers design and
              develop creative websites that align with their vision and
              captivate visitors, encouraging them to stay and engage. The
              technologies and tools I use to create such outstanding websites
              include a range of modern, efficient, and powerful web development
              solutions."
            </Text>
            <br />
            <BootstrapContainer>
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                p={4}
              >
                <Box flex={1} mb={{ base: 6, md: 0 }}>
                  <HStack wrap="wrap" justify="start" gap={4}>
                    <Button variant="outline" m={2}>
                      Html5 <FaHtml5 style={{ color: "orange" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Css3 <FaCss3Alt style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Bootstrap5 <FaBootstrap style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Javascript <DiJavascript style={{ color: "orange" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Git <FaGitAlt style={{ color: "orange" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      GitHub <FiGithub style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      MongoDB <SiMongodb style={{ color: "green" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Express <SiExpress style={{ color: "orange" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      React <FaReact style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Node <FaNode style={{ color: "green" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Next <RiNextjsFill style={{ color: "red" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Sanity <SiSanity style={{ color: "red" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Tailwind CSS{" "}
                      <RiTailwindCssFill style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Firebase <RiFirebaseLine style={{ color: "orange" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      SuperBase <GiTBrick style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      ChatGpt
                    </Button>
                    <Button variant="outline" m={2}>
                      React Bootstrap <FaBootstrap style={{ color: "blue" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Material UI <SiMui style={{ color: "red" }} />
                    </Button>
                    <Button variant="outline" m={2}>
                      Chakra UI <SiChakraui style={{ color: "purple" }} />
                    </Button>
                    <Button
                      variant="outline"
                      m={2}
                      size="lg"
                      colorScheme="orange"
                    >
                      Python <FaPython style={{ color: "orange" }} />
                    </Button>
                  </HStack>
                </Box>
                <Box flex={1} textAlign="center">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={300}
                    height={300}
                    layout="intrinsic"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              </Flex>
            </BootstrapContainer>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Exit</Button>
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </HStack>
  );
};

