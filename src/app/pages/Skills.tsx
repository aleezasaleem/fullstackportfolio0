import { Box, Container, Button, HStack, Flex, Text } from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaNode,
  FaArrowRightLong,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import {
  SiMongodb,
  SiExpress,
  SiSanity,
  SiChakraui,
  SiMui,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseLine,
} from "react-icons/ri";
import { GiTBrick } from "react-icons/gi";
import { motion } from "framer-motion"; // Import motion for animations

const Skills = () => {
  return (
    <Container maxW="container.lg" py={6} id="skills">
      <Text textStyle="2xl" fontWeight="bold" mb={6} color="teal.500">
        SKILLS
      </Text>
      <hr />
      <Box>
        {/* Main Flex Container for side-by-side on desktop */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          p={4}
          wrap="wrap"
        >
          {/* Left Column with Buttons */}
          <Box flex={1} mb={{ base: 6, md: 0 }} textAlign="center">
            <HStack wrap="wrap" justify="center" spacing={6}>
              {/* Using motion for infinite animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="teal">
                  Html5 <FaHtml5 style={{ color: "orange" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  Css3 <FaCss3Alt style={{ color: "blue" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.2,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  Bootstrap5 <FaBootstrap style={{ color: "blue" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="yellow">
                  Javascript <DiJavascript style={{ color: "orange" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.4,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="orange">
                  Git <FaGitAlt style={{ color: "orange" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  GitHub <FiGithub style={{ color: "blue" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="green">
                  MongoDB <SiMongodb style={{ color: "green" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.7,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="orange">
                  Express <SiExpress style={{ color: "orange" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  React <FaReact style={{ color: "blue" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.9,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="green">
                  Node <FaNode style={{ color: "green" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.0,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="red">
                  Next <RiNextjsFill style={{ color: "red" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.1,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="red">
                  Sanity <SiSanity style={{ color: "red" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.2,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  Tailwind CSS <RiTailwindCssFill style={{ color: "blue" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.3,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="orange">
                  Firebase <RiFirebaseLine style={{ color: "orange" }} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.4,
                  ease: "easeInOut",
                }}
              >
                <Button variant="outline" m={2} size="lg" colorScheme="blue">
                  SuperBase <GiTBrick style={{ color: "blue" }} />
                </Button>
                {/* python */}
                <Button variant="outline" m={2} size="lg">
                  Python <FaPython style={{ color: "orange" }} />
                </Button>
              </motion.div>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Skills;
