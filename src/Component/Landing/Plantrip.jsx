// src/components/TripPlanning.jsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  Chip,
} from "@mui/material";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Built-in ImageWithFallback (no figma import)
function ImageWithFallback({ src, alt, sx }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Box
        sx={{
          ...sx,
          background: "linear-gradient(135deg, #1e40af, #1e3a8a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textAlign: "center",
          p: 2,
        }}
      >
        {alt || "Plan"}
      </Box>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      style={{
        ...(sx || {}),
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease",
        display: "block",
      }}
    />
  );
}

const planningSteps = [
  {
    icon: Calendar,
    title: "Choose Your Dates",
    description: "Pick the perfect time to visit based on weather and activities you want to enjoy",
    color: { bg: "#dbeafe", text: "#2563eb" }, // blue-100 / blue-600
  },
  {
    icon: MapPin,
    title: "Select Destinations",
    description: "Explore our curated list of must-visit places from beaches to mountains",
    color: { bg: "#d1fae5", text: "#16a34a" }, // green-100 / green-600
  },
  {
    icon: Users,
    title: "Plan Activities",
    description: "Discover unique experiences, tours, and adventures for your group",
    color: { bg: "#e9d5ff", text: "#9333ea" }, // purple-100 / purple-600
  },
  {
    icon: Clock,
    title: "Create Itinerary",
    description: "Build a day-by-day schedule that maximizes your time in Sri Lanka",
    color: { bg: "#fed7aa", text: "#ea580c" }, // orange-100 / orange-600
  },
];

const quickPlans = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    destinations: ["Kandy", "Sigiriya", "Anuradhapura"],
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Ancient temples", "UNESCO sites", "Cultural shows"],
    rating: 4.8,
  },
  {
    id: 2,
    title: "Beach & Wildlife Safari",
    duration: "10 Days",
    destinations: ["Mirissa", "Yala", "Galle"],
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Whale watching", "Leopard spotting", "Beach relaxation"],
    rating: 4.9,
  },
  {
    id: 3,
    title: "Hill Country Adventure",
    duration: "5 Days",
    destinations: ["Ella", "Nuwara Eliya", "Adam's Peak"],
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Train journeys", "Tea factory tours", "Mountain hikes"],
    rating: 4.7,
  },
];

export function TripPlanning({ }) {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      id="plan"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1.875rem", md: "2.25rem" },
              fontWeight: "bold",
              color: "#111827",
              mb: 2,
            }}
          >
            Plan Your Perfect Sri Lankan Adventure
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "#4b5563",
              maxWidth: "672px",
              mx: "auto",
            }}
          >
            From cultural treasures to pristine beaches, create an unforgettable journey with our expert planning tools
          </Typography>
        </Box>

        {/* Planning Steps */}
        <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
          {planningSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid item xs={12} md={6} lg={3} 
              key={step.title}>
                <Card
                  sx={{
                    textAlign: "center",
                    width: 250,
                    height: 250,
                    boxShadow: 4,
                    transition: "box-shadow 0.3s ease",
                    "&:hover": { boxShadow: 8 },
                  }}
                >
                  <CardContent sx={{ pt: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        mx: "auto",
                        mb: 2,
                        borderRadius: "50%",
                        bgcolor: step.color.bg,
                        color: step.color.text,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComponent size={32} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#4b5563" }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Quick Plan Templates */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: "bold",
              color: "#111827",
              mb: 4,
              textAlign: "center",
            }}
          >
            Popular Itinerary Templates
          </Typography>

          <Grid container 
          sx={{ justifyContent: 'center'}}
          spacing={3}>
            {quickPlans.map((plan) => (
              <Grid item xs={12} md={4} 
              key={plan.id}>
                <Card
                  sx={{
                    height: "100%",
                    maxWidth: 350,
                  minWidth: 280,
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: 6,
                      "& .img-hover": { transform: "scale(1.1)" },
                      "& .title-hover": { color: "#16a34a" },
                    },
                  }}
                >
                  {/* Image */}
                  <Box sx={{ position: "relative", height: 192, overflow: "hidden" }}>
                    <ImageWithFallback
                      src={plan.image}
                      alt={plan.title}
                      sx={{ transition: "transform 0.3s ease" }}
                      className="img-hover"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(255,255,255,0.9)",
                        borderRadius: "9999px",
                        px: 1.5,
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Star size={12} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {plan.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography
                        variant="h6"
                        className="title-hover"
                        sx={{
                          fontWeight: 600,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {plan.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500 }}>
                        {plan.duration}
                      </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: "#4b5563", mb: 2 }}>
                      <strong>Destinations:</strong> {plan.destinations.join(", ")}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mb: 2 }}>
                      {plan.highlights.map((h) => (
                        <Chip
                          key={h}
                          label={h}
                          size="small"
                          sx={{
                            bgcolor: "#f3f4f6",
                            color: "#374151",
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => navigate("/plantravel")}
                      sx={{
                        borderColor: "#16a34a",
                        color: "#16a34a",
                        "&:hover": {
                          borderColor: "#16a34a",
                          bgcolor: "rgba(22, 163, 74, 0.04)",
                        },
                        textTransform: "none",
                      }}
                    >
                      Use This Template
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ textAlign: "center" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            <Button
              size="large"
              variant="contained"
              startIcon={<Calendar size={20} />}
              onClick={() => navigate("/plantravel")}
              sx={{
                bgcolor: "#16a34a",
                "&:hover": { bgcolor: "#15803d" },
                color: "white",
                textTransform: "none",
                px: 4,
              }}
            >
              Start Planning Your Trip
            </Button>
            <Button
              size="large"
              variant="outlined"
              startIcon={<MapPin size={20} />}
              onClick={() => navigate("/travelguide")}
              sx={{
                borderColor: "#d1d5db",
                color: "#111827",
                "&:hover": { bgcolor: "#f9fafb" },
                textTransform: "none",
                px: 4,
              }}
            >
              Browse Travel Guide
            </Button>
          </Stack>

          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Not sure where to start? Check out our comprehensive travel guide for insider tips and essential information.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default TripPlanning;