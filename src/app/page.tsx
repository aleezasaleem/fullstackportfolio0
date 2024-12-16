"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Button, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AllComp from "./pages/AllComp";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollPercentage(scrollPercent);
      updateScrollbarColor(scrollPercent);
    };

    const updateScrollbarColor = (scrollPercent: number) => {
      const scrollbarThumb = document.querySelector(
        "::-webkit-scrollbar-thumb"
      ) as HTMLElement;

      // Define a color gradient based on scroll percentage
      const red = Math.min(255, Math.floor(scrollPercent * 2.55));
      const green = Math.min(255, Math.floor(255 - scrollPercent * 2.55));
      const blue = Math.min(255, Math.floor(scrollPercent * 1.27));

      const color = `rgb(${red}, ${green}, ${blue})`;
      if (scrollbarThumb) {
        scrollbarThumb.style.backgroundColor = color;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    window.open(
      "https://github.com/aleezasaleem",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* Inline style for animated red scrollbar */}
      <style jsx global>{`
        /* Global scrollbar styles */
        html,
        body {
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: red transparent; /* For Firefox */
        }

        ::-webkit-scrollbar {
          width: 12px; /* Scrollbar width */
          height: 12px; /* Scrollbar height */
        }

        ::-webkit-scrollbar-thumb {
          background-color: red; /* Initial color */
          border-radius: 10px;
          transition: background-color 0.25s ease-in-out; /* Smooth transition */
        }

        ::-webkit-scrollbar-track {
          background-color: transparent; /* Track background */
        }
      `}</style>

      <Container>
        <Box
          pt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Button
            variant="ghost"
            onClick={handleClick}
            style={{ color: "#3b82f6" }}
          >
            <FaGithub />
          </Button>

          <Button
            onClick={toggleColorMode}
            variant="ghost"
            style={{ color: "#3b82f6" }}
          >
            {colorMode === "light" ? (
              <MdOutlineNightlight title="Turn On" />
            ) : (
              <MdOutlineLightMode title="Turn Off" />
            )}
          </Button>
        </Box>

        {/* Other Components */}

        <AllComp />
      </Container>
    </>
  );
};

export default Page;

// 200ns zada hota
