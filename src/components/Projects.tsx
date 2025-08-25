// src/components/Projects.tsx
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Link,
  Chip,
  IconButton,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Inventory Management SaaS",
    description: (
      <>
        <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
          A full-stack SaaS app for <strong>repair shops</strong> with{" "}
          <strong>customer management</strong>, <strong>inventory</strong>, and{" "}
          <strong>shipping integrations</strong>.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Demo Login → User: t.vandoren88@gmail.com | Password: testing
        </Typography>
      </>
    ),
    tech: ["React", "TypeScript", "Supabase", "Electron", "MUI"],
    github: "https://github.com/yourusername/inventory-saas",
    demo: "https://swiftwebinnov.com/inventory-demo",
  },
  {
    title: "Personal Portfolio",
    description: (
      <>
        My <strong>personal portfolio</strong> showcasing{" "}
        <strong>skills, resume, and projects</strong> built with{" "}
        <strong>React + Vite</strong>.
      </>
    ),
    tech: ["React", "Vite", "MUI", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://trevorvandoren.swiftwebinnov.com",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 4,
          }}
        >
          <CodeIcon fontSize="large" /> Projects
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => (
            <Paper
              key={project.title}
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                {project.description}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
                ))}
              </Stack>

              <Stack direction="row" spacing={2}>
                <IconButton
                  component={Link}
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  <LaunchIcon />
                </IconButton>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
