import React, { useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import "../styles/Nav.css";

const NavigationBar = () => {
  const { colorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle when a link is clicked and close the drawer
  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  const navbarProps = {
    items: [
      { text: "Home", link: "/" },
      { text: "SKILLS", link: "#skills" },
      { text: "CONTACT", link: "#Contact" },
      { text: "EXPERIENCE", link: "#exp" },
      { text: "PROJECTS", link: "#project" },
      { text: "EDUCATION", link: "#education" },
    ],
    logo: {
      text: "", // Add logo text or image here if needed
    },
    style: {
      barStyles: {
        background: colorMode === "light" ? "#fff" : "#111",
        boxShadow: "none",
      },
      sidebarStyles: {
        background: colorMode === "light" ? "#f5f5f5" : "#333",
        buttonColor: colorMode === "light" ? "#0984e3" : "#fff",
      },
      logoStyles: {
        color: colorMode === "light" ? "#0984e3" : "#fff",
      },
      linkStyles: {
        color: colorMode === "light" ? "#0984e3" : "#fff",
      },
    },
    // Call handleLinkClick when any link is clicked
    onLinkClick: handleLinkClick,
  };

  return (
    <Navbar
      {...navbarProps}
      isDrawerOpen={isDrawerOpen}
      onDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)}
    />
  );
};

export default NavigationBar;
