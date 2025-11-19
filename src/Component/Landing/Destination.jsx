// src/components/FeaturedDestinations.jsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import { MapPin, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Built-in ImageWithFallback (no external import)
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
        {alt || "Image"}
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

const destinations = [
  {
    id: "sigiriya",
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and UNESCO World Heritage site with stunning frescoes and gardens",
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Central Province",
    duration: "Half day",
    rating: 4.8,
    category: "Historical",
  },
  {
    id: "mirissa",
    name: "Mirissa Beach",
    description: "Perfect golden sand beach for whale watching, surfing, and tropical relaxation",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southern Coast",
    duration: "Full day",
    rating: 4.7,
    category: "Beach",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya Tea Country",
    description: "Rolling green tea plantations and cool mountain climate in the hill country",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Hill Country",
    duration: "2-3 days",
    rating: 4.9,
    category: "Nature",
  },
  {
    id: "yala",
    name: "Yala National Park",
    description: "Premier wildlife sanctuary famous for leopards, elephants, and diverse bird species",
    image: "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGVsZXBoYW50JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southeast Coast",
    duration: "1-2 days",
    rating: 4.6,
    category: "Wildlife",
  },
];

export function FeaturedDestinations({}) {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      id="destinations"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#f9fafb",
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
            Discover Sri Lanka's Must-Visit Destinations
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
            From ancient fortresses to pristine beaches, explore the diverse beauty of the Pearl of the Indian Ocean
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
          {destinations.map((dest) => (
            <Grid item xs={12} sm={6} lg={3} key={dest.id}>
              <Card
                sx={{
                  height: "100%",
                  width: 250,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: 6,
                    "& .img-hover": { transform: "scale(1.1)" },
                    "& .title-hover": { color: "#16a34a" },
                  },
                }}
                onClick={() => navigate("destination", dest.id)}
              >
                {/* Image Container */}
                <Box sx={{ position: "relative", height: 192, overflow: "hidden" }}>
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    sx={{ transition: "transform 0.3s ease" }}
                    className="img-hover"
                  />

                  {/* Category Badge */}
                  <Chip
                    label={dest.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      bgcolor: "rgba(255,255,255,0.9)",
                      color: "#1f2937",
                      fontWeight: 500,
                    }}
                  />

                  {/* Rating */}
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
                      {dest.rating}
                    </Typography>
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="title-hover"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {dest.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4b5563",
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {dest.description}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                  >
                    <Stack direction="row" alignItems="center" gap={0.5}>
                      <MapPin size={16} />
                      <span>{dest.location}</span>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={0.5}>
                      <Clock size={16} />
                      <span>{dest.duration}</span>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/destination")}
            sx={{
              borderColor: "#16a34a",
              color: "#16a34a",
              "&:hover": {
                borderColor: "#16a34a",
                bgcolor: "rgba(22, 163, 74, 0.04)",
              },
              textTransform: "none",
              px: 4,
            }}
          >
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturedDestinations;