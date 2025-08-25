// src/components/Hero.tsx
import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Button, Avatar, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ShapeProps {
  size?: number;
  color?: string;
}

// Bouncing shapes like DVD screensaver
const BouncingShape = ({ size = 50, color = "rgba(255,153,0,0.3)" }: ShapeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: Math.random() * 300, y: Math.random() * 300 });
  const velocity = useRef({ x: 2 + Math.random() * 2, y: 2 + Math.random() * 2 });

  useEffect(() => {
    let animationFrame: number;

    const move = () => {
      const container = containerRef.current?.parentElement;
      if (!container) return;

      const { offsetWidth: width, offsetHeight: height } = container;

      let x = position.x + velocity.current.x;
      let y = position.y + velocity.current.y;

      if (x <= 0 || x + size >= width) velocity.current.x *= -1;
      if (y <= 0 || y + size >= height) velocity.current.y *= -1;

      setPosition({ x, y });
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, size]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        pointerEvents: "none",
      }}
    />
  );
};

// Orbiting shape around avatar
const OrbitingShape = ({ size = 60, color = "rgba(255,153,0,0.2)" }) => {
  const [angle, setAngle] = useState(Math.random() * 360);
  const radius = 170;

  useEffect(() => {
    let animationFrame: number;

    const rotate = () => {
      setAngle((prev) => (prev + 1) % 360);
      animationFrame = requestAnimationFrame(rotate);
    };

    animationFrame = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <Box
      sx={{
        position: "absolute",
        top: `50%`,
        left: `50%`,
        transform: `translate(${x}px, ${y}px)`,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        pointerEvents: "none",
      }}
    />
  );
};

export default function Hero() {
  const theme = useTheme();
  const imageUrl = "/assets/images/trevor.jpg";

  return (
    <Box
      id="hero"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.paper",
        background: "linear-gradient(135deg, rgba(255,153,0,0.1) 0%, rgba(255,153,0,0.03) 100%)",
      }}
    >
      <Helmet>
        {/* Basic SEO */}
        <title>Trevor Van Doren | Full Stack & DevOps Engineer</title>
        <meta
          name="description"
          content="Trevor Van Doren, Full Stack & DevOps Engineer. Building scalable software solutions using React, TypeScript, Python, and cloud technologies."
        />
        <meta
          name="keywords"
          content="Trevor Van Doren, Full Stack Engineer, DevOps, React, TypeScript, Python, Cloud"
        />
        <meta name="author" content="Trevor Van Doren" />

        {/* Open Graph */}
        <meta property="og:title" content="Trevor Van Doren | Full Stack & DevOps Engineer" />
        <meta
          property="og:description"
          content="Building scalable software solutions using React, TypeScript, Python, and cloud technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trevorvandoren.swiftwebinnov.com" />
        <meta property="og:image" content={`https://trevorvandoren.swiftwebinnov.com${imageUrl}`} />

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trevor Van Doren | Full Stack & DevOps Engineer" />
        <meta
          name="twitter:description"
          content="Building scalable software solutions using React, TypeScript, Python, and cloud technologies."
        />
        <meta name="twitter:image" content={`https://trevorvandoren.swiftwebinnov.com${imageUrl}`} />
        <meta name="twitter:creator" content="@trevorvandoren" /> */}

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Trevor Van Doren",
            "jobTitle": "Full Stack & DevOps Engineer",
            "url": "https://trevorvandoren.swiftwebinnov.com",
            "sameAs": [
              "https://www.linkedin.com/in/trevor-van-doren-3685b5ba/"
            ],
            "image": `https://trevorvandoren.swiftwebinnov.com${imageUrl}`
          })}
        </script>
      </Helmet>

      {/* Bouncing shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <BouncingShape
          key={i}
          size={30 + Math.random() * 50}
          color={`rgba(255,153,0,${0.1 + Math.random() * 0.3})`}
        />
      ))}

      {/* Hero Content */}
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ flexShrink: 0, position: "relative", display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Trevor Van Doren"
            src={imageUrl}
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              boxShadow: 6,
              border: "6px solid rgba(255,153,0,0.3)",
            }}
          />
          {/* Orbiting shape around avatar */}
          {/* <OrbitingShape size={80} color="rgba(255,153,0,0.25)" /> */}
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Trevor Van Doren
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Full Stack & DevOps Engineer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
            I streamline workflows, refactor code, and build scalable solutions across web, firmware, and DevOps, helping teams work smarter.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="https://www.linkedin.com/in/trevor-van-doren-3685b5ba/"
              startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
