// src/components/Experience.tsx
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function Experience() {
  const jobs = [
    {
      role: "Build Integration Engineer",
      company: "CoreAVI",
      location: "Fort Worth, TX",
      period: "Oct 2024 – Present",
      bullets: [
        "Automated CI/CD pipelines and improved build performance using Python, Jenkins, and Groovy",
        "Administered Jenkins and Codebeamer, managing complex workflows and integrations",
        "Reduced manual input and data entry errors by implementing REST API integrations",
        "Developed and maintained Python scripts to improve team efficiency by 30%",
      ],
      skills: ["Python", "Jenkins", "Groovy", "REST APIs", "CI/CD","Artifactory", "Java"],
    },
    {
      role: "Lead Software Engineer",
      company: "Avantax",
      location: "Coppell, TX",
      period: "Jan 2023 – Jul 2024",
      bullets: [
        "Led a 3-person team, deploying web applications to 1000+ customers with frequent releases",
        "Reduced release deployment time from 1.5 hours to under 30 minutes",
        "Developed full-stack features using Python, Django, PostgreSQL, and Vue.js",
        "Ensured reliability and maintainability with automated tests and REST API validation",
      ],
      skills: ["Python", "Django", "PostgreSQL", "Vue.js", "Automated Testing"],
    },
    {
      role: "Application & Firmware Engineer",
      company: "REV Robotics",
      location: "Carrollton, TX",
      period: "Nov 2021 – Dec 2022",
      bullets: [
        "Developed React desktop applications and C-based firmware for robotics kits",
        "Authored C++/Java SDKs and automated test frameworks for quality assurance",
        "Collaborated with support to resolve customer issues and validate performance using electronic tools",
      ],
      skills: ["Python", "C/C++", "React", "Firmware", "SDKs"],
    },
    {
      role: "Verification Engineer",
      company: "CoreAVI",
      location: "Remote",
      period: "May 2021 – Nov 2021",
      bullets: [
        "Built automated Python tools to accelerate internal software build cycles",
      ],
      skills: ["Python", "Automation", "CI/CD"],
    },
    {
      role: "Automation Engineer",
      company: "Beyond Identity",
      location: "Remote",
      period: "Sep 2020 – May 2021",
      bullets: [
        "Built cross-platform automation tools for Windows, macOS, and Android apps",
        "Created Java-based test suites with Sikuli, CI/CD, and Jira integration",
      ],
      skills: ["Python", "Java", "Sikuli", "CI/CD", "Automation"],
    },
    {
      role: "Application Engineer & Team Lead",
      company: "Maxim Integrated",
      location: "Farmers Branch, TX",
      period: "May 2016 – Sep 2020",
      bullets: [
        "Designed and maintained SDKs used by external customers to drive multi-million-dollar chip sales",
        "Reduced SDK release time by 70% with Jenkins-based automation",
        "Built cross-platform installers using QT for Windows, macOS, and Linux",
        "Led a 3-person team in codebase redesign for modular and scalable architecture",
        "Created Eclipse plugin for seamless project setup by customers",
      ],
      skills: ["Python", "Jenkins", "QT", "SDKs", "Team Leadership", "C", "make"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box id="experience" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}
        >
          Experience
        </Typography>
        <Timeline position="alternate">
          {jobs.map((job, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                {index < jobs.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    bgcolor: "background.paper",
                    mb: 2,
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      onClick={() => handleToggle(index)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {job.role} @ {job.company}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {job.location} • {job.period}
                        </Typography>
                      </Box>
                      <IconButton size="small">
                        {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </Box>

                    {/* Always-visible skills */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2, mb: 2 }}>
                      {job.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          color="secondary"
                          sx={{
                            borderRadius: 2,
                            fontWeight: 500,
                            borderWidth: 2,
                            "&:hover": {
                              bgcolor: "secondary.main",
                              color: "white",
                              borderColor: "secondary.main",
                              transition: "all 0.2s ease-in-out",
                            },
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Collapsible bullets */}
                    <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                      <List dense sx={{ mt: 1, mb: 1 }}>
                        {job.bullets.map((bullet, i) => (
                          <ListItem key={i} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28, color: "primary.main" }}>•</ListItemIcon>
                            <ListItemText primary={bullet} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
