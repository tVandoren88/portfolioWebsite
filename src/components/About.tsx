// src/components/About.tsx
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* About Content */}
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 5,
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <Typography variant="h4" gutterBottom color="primary">
                About Me
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Software Engineer with over 8 years of professional experience and 4 years of
                internship experience across full stack, automation, firmware, and DevOps.
                Proven leader and contributor in Agile environments, with strong mentorship,
                cross-functional collaboration, and hands-on development skills. Expert in Python,
                C, Java, web development, CI/CD, and SDK architecture. Adept at automating
                workflows, optimizing builds, and delivering customer-focused software solutions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
