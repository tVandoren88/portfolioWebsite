import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", bgcolor: "#222", color: "#fff" }}>
      <Container>
        <Typography variant="body2">
          © {new Date().getFullYear()} Trevor Van Doren. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
