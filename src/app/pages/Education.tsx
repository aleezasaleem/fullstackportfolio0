import { Box, Container, Text } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";

const Eduvation = () => {
  return (
    <Container>
      <hr />
      <br />
      <Box id="edugation" pt={5}>
        <Text textStyle="3xl" color="teal.500" fontWeight={"bold"}>
          EDUCATION
        </Text>
        <br />
        <br />
        <TimelineRoot maxW="full">
          {/* First Education Timeline Item: Board of Intermediate Karachi */}
          <TimelineItem>
            <TimelineConnector>
              <LuShip />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Board of Intermediate Karachi</TimelineTitle>
              <TimelineDescription>2020 - 2022</TimelineDescription>
              <Text textStyle="sm">
                Studied Computer Science at the Board of Intermediate Education
                Karachi, where I gained foundational knowledge in computer
                systems and software development.
              </Text>
            </TimelineContent>
          </TimelineItem>

          {/* Second Education Timeline Item: Certified Cloud Applied Generative AI Engineer */}
          <TimelineItem>
            <TimelineConnector>
              <LuCheck />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                Pursuing Certified Cloud Applied Generative AI Engineer
              </TimelineTitle>
              <TimelineDescription>
                March 2023 - Present | Karachi, Pakistan
              </TimelineDescription>
              <Text textStyle="sm">
                Currently pursuing a certification at PIAIC in Cloud Applied
                Generative AI. This course combines expertise in Next.js, React,
                Tailwind CSS, and cloud technologies with a strong focus on
                AI-driven solutions. I am passionate about integrating AI
                concepts into web development to enhance user experience and
                performance.
              </Text>
              <Text textStyle="sm">
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.piaic.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PIAIC
                </a>
              </Text>
            </TimelineContent>
          </TimelineItem>

          {/* Third Education Timeline Item: Milestone Reached (Fake Product Shipped) */}
          <TimelineItem>
            <TimelineConnector>
              <LuShip />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                Completed Advanced JavaScript Course
              </TimelineTitle>
              <TimelineDescription>13th May 2021</TimelineDescription>
              <Text textStyle="sm">
                Successfully completed an advanced JavaScript course, learning
                about asynchronous programming, closures, and advanced concepts
                in the language.
              </Text>
            </TimelineContent>
          </TimelineItem>

          {/* Fourth Education Timeline Item: Milestone Reached (Fake Order Confirmed) */}
          <TimelineItem>
            <TimelineConnector>
              <LuCheck />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                Completed Data Structures & Algorithms
              </TimelineTitle>
              <TimelineDescription>18th May 2021</TimelineDescription>
              <Text textStyle="sm">
                Completed a comprehensive course on data structures and
                algorithms, mastering concepts like trees, graphs, and dynamic
                programming.
              </Text>
            </TimelineContent>
          </TimelineItem>

          {/* Fifth Education Timeline Item: Milestone Reached (Fake Order Delivered) */}
          <TimelineItem>
            <TimelineConnector>
              <LuPackage />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                Successfully Built Full-Stack Web App
              </TimelineTitle>
              <TimelineDescription>20th May 2021, 10:30am</TimelineDescription>
              <Text textStyle="sm">
                Built and deployed a full-stack web application using React,
                Node.js, and MongoDB, focusing on user authentication and
                responsive UI.
              </Text>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Box>
    </Container>
  );
};

export default Eduvation;
