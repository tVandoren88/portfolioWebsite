import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  const sections = ["about", "skills", "experience", "contact"];
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink header and detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(245,245,245,0.85)",
        color: "#333",
        backdropFilter: "blur(14px)",
        boxShadow: isScrolled
          ? "0 8px 25px rgba(0,0,0,0.15), 0 0 12px rgba(255,153,0,0.2)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        height: isScrolled ? 56 : 70,
        justifyContent: "center",
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ minHeight: "inherit !important" }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            transition: "all 0.3s ease",
            fontSize: isScrolled ? "1rem" : "1.25rem",
          }}
        >
          Trevor Van Doren
        </Typography>
        <Box>
          {sections.map((item) => (
            <Button
              key={item}
              onClick={() => handleClick(item)}
              sx={{
                color: activeSection === item ? "#ff9900" : "#333",
                textTransform: "none",
                fontWeight: 500,
                mx: 1,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: activeSection === item ? "100%" : "0%",
                  height: "3px",
                  borderRadius: "2px",
                  bgcolor: "transparent",
                  background: activeSection === item
                    ? "linear-gradient(90deg, #ff9900, #ffcc66)"
                    : "transparent",
                  transition: "width 0.3s ease, background 0.3s ease",
                },
                "&:hover": {
                  color: "#ff9900",
                  "&::after": {
                    width: "100%",
                    background: "linear-gradient(90deg, #ff9900, #ffcc66)",
                  },
                },
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
