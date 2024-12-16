import { Box, Container, Stack, Text } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import Education from "./Education";

export const Experience = () => {
  return (
    <Container
      maxW={{ base: "full", lg: "container.lg" }}
      pt={{ base: 6, md: 8 }}
    >
      <Box id="exp">
        <hr />
        <br />
        <Text
          textStyle="4xl"
          pb={5}
          textAlign={{ base: "center", md: "left" }} // Center on mobile, left-align on larger screens
          fontSize={{ base: "2xl", md: "4xl" }} // Adjust font size for smaller screens
          color="teal.500"
          fontWeight={"bold"}
        >
          EXPERIENCE
        </Text>

        <Stack gap={{ base: "4", md: "8" }} pt={{ base: "5", md: "8" }}>
          {/* Timeline Root */}
          <Text>
            Nov 2023 - Present Freelance Frontend Developer Developed Frontend
            applications using the latest technologies Front-end development
            with React.js and Next.js. Styling expertise with Tailwind CSS, MUI,
            Chakra UI, Shadcn UI, and Custom CSS Content management through
            Contentful and Sanity (Headless CMS). Back-end development using
            Node.js, Express.js, and Next.js API routes. MongoDB and PostgreSQL
            for Database Responsive design is an approach to web design that
            ensures web pages render well
          </Text>
          <TimelineRoot>
            {/* First Experience: Fake Job as Frontend Developer */}
            <br />
            <TimelineItem>
              <TimelineContent width="auto">
                <TimelineTitle
                  whiteSpace="nowrap"
                  fontSize={{ base: "lg", md: "xl" }} // Responsive title font size
                >
                  Jan 2024
                </TimelineTitle>
              </TimelineContent>
              <TimelineConnector />
              <TimelineContent>
                <TimelineTitle fontWeight="bold" color="gray.700">
                  Responsibilities:
                </TimelineTitle>
                <Text
                  color="gray.600"
                  mt={2}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  - Developed and maintained responsive web applications using
                  React.js and Chakra UI.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Collaborated with the design team to implement pixel-perfect
                  UI components.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Ensured cross-browser compatibility and mobile-first
                  designs.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Optimized the performance of web pages, improving loading
                  time by 20%.
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent width="auto">
                <TimelineTitle
                  whiteSpace="nowrap"
                  fontSize={{ base: "lg", md: "xl" }}
                >
                  Nov 2023
                </TimelineTitle>
              </TimelineContent>
              <TimelineConnector />
              <TimelineContent>
                <TimelineTitle fontWeight="bold" color="gray.700">
                  Responsibilities:
                </TimelineTitle>
                <Text
                  color="gray.600"
                  mt={2}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  - Assisted in building and maintaining websites using HTML,
                  CSS, and JavaScript.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Supported senior developers in implementing new features and
                  fixing bugs.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Worked closely with the design team to integrate UI designs
                  into the website.
                </Text>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  - Conducted cross-browser testing to ensure functionality
                  across all platforms.
                </Text>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </Stack>
      </Box>
      <Education />
    </Container>
  );
};
