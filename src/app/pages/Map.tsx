import { Container, Box } from "@chakra-ui/react";
import React from "react";

const Map = () => {
  return (
    <Container>
      <h2 style={{ color: "red", fontWeight: "bold" }}>My Location</h2>
      <br />
      <Box
        position="relative"
        width="100%"
        height="0"
        paddingBottom="56.25%"
        overflow="hidden"
        borderRadius="md"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924227.1804475766!2d65.86677828457366!3d25.194371194211886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb35b7f5bfd6e89%3A0xc463ba9517671d59!2zS2FyYWNoaSBDaXR5LCDgsLjgsL_gsILgsKfgsY0sIOCwquCwvuCwleCwv-CwuOCxjeCwpOCwvuCwqOCxjQ!5e0!3m2!1ste!2sin!4v1734092264495!5m2!1ste!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Map;
