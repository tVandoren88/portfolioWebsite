// src/components/Skills.tsx
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

type Skill = { name: string; strength: number };

const skillCategories: Record<string, Skill[]> = {
  Languages: [
    { name: "C", strength: 3 },
    { name: "C#", strength: 2 },
    { name: "Java", strength: 2 },
    { name: "Python", strength: 5 },
    { name: "HTML", strength: 5 },
    { name: "CSS", strength: 4 },
    { name: "JavaScript", strength: 5 },
    { name: "TypeScript", strength: 4 },
    { name: "SQL", strength: 3 },
    { name: "XML", strength: 5 },
    { name: "Bash", strength: 5 },
  ],
  Frameworks: [
    { name: "React", strength: 3 },
    { name: "Vue.js", strength: 2 },
    { name: "Django", strength: 3 },
    { name: "QT", strength: 2 },
    { name: "MUI", strength: 4 },
  ],
  Tools: [
    { name: "Git", strength: 5 },
    { name: "Subversion", strength: 5 },
    { name: "Jira", strength: 4 },
    { name: "Xray", strength: 1 },
    { name: "Postman", strength: 5 },
    { name: "Swagger", strength: 5 },
    { name: "Codebeamer ALM", strength: 5 },
  ],
  DevOps: [
    { name: "Docker", strength: 3 },
    { name: "Jenkins", strength: 5 },
    { name: "CI/CD pipelines", strength: 4 },
    { name: "AWS", strength: 3 },
    { name: "Artifactory", strength: 3 },
  ],
  Testing: [
    { name: "Selenium", strength: 2 },
    { name: "Google Test", strength: 2 },
    { name: "Automated Testing", strength: 3 },
  ],
  Concepts: [
    { name: "REST APIs", strength: 5 },
    { name: "SDK Development", strength: 5 },
    { name: "System Architecture", strength: 4 },
    { name: "Build Automation", strength: 4 },
    { name: "Firmware Debugging", strength: 3 },
    { name: "Robotics", strength: 3 },
    { name: "Agile/Scrum", strength: 5 },
  ],
  Databases: [
    { name: "PostgreSQL", strength: 4 },
    { name: "MySQL", strength: 4 },
    { name: "Supabase", strength: 3 },
  ],
  "Soft Skills": [
    { name: "Leadership", strength: 4 },
    { name: "Mentorship", strength: 4 },
    { name: "Teamwork", strength: 5 },
    { name: "Problem Solving", strength: 5 },
    { name: "User-Centric Thinking", strength: 5 },
    { name: "Growth Mindset", strength: 5 },
  ],
};

export default function Skills() {
  const [currentTab, setCurrentTab] = useState(0);
  const categories = Object.keys(skillCategories);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: "background.default" }}>
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
          <CodeIcon fontSize="large" /> Skills
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "background.paper",
          }}
        >
          {/* Tabs */}
          <Tabs
            value={currentTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
            textColor="primary"
            indicatorColor="primary"
          >
            {categories.map((category) => (
              <Tab
                key={category}
                label={`${category} (${skillCategories[category].length})`}
              />
            ))}
          </Tabs>

          {/* Skills Grid */}
          <Grid container spacing={2}>
            {skillCategories[categories[currentTab]]
              .sort((a, b) => b.strength - a.strength)
              .map((skill) => (
                <Grid item xs={12} sm={6} key={skill.name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        transition: "all 0.2s ease-in-out",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>
                      {skill.name}
                    </Typography>
                    <Box>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            fontSize: 20,
                            color:
                              i < skill.strength
                                ? "primary.main"
                                : "action.disabled",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>

          {/* Legend / Key */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Star Rating Key:
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2">
                ⭐⭐⭐⭐⭐ – Expert / Highly Proficient
              </Typography>
              <Typography variant="body2">
                ⭐⭐⭐⭐ – Strong / Advanced
              </Typography>
              <Typography variant="body2">
                ⭐⭐⭐ – Intermediate
              </Typography>
              <Typography variant="body2">
                ⭐⭐ – Beginner
              </Typography>
              <Typography variant="body2">
                ⭐ – Basic Exposure
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
