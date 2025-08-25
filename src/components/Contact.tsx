// src/components/Contact.tsx
import { Box, Container, Typography, Button, Paper, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 5,
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "background.paper",
            boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Contact Me
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.secondary", mb: 3 }}>
            I'm currently open to freelance or full-time opportunities. Let’s connect!
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ flexWrap: "wrap", gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:trevor.vandoren@gmail.com"
            >
              Email Me
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/trevor-van-doren-3685b5ba/"
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/tVandoren88"
              target="_blank"
            >
              GitHub
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
