// src/components/HotelBooking.jsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Button,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import {
  Wifi,
  Waves,
  Coffee,
  Car,
  MapPin,
  Star,
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
        {alt || "Hotel"}
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

const hotels = [
  {
    id: 1,
    name: "Shangri-La Colombo",
    description: "Luxury waterfront hotel in the heart of Colombo with stunning ocean views",
    image: "https://images.unsplash.com/photo-1732272106767-9dc0a3af6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc1NTc4Njg2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Colombo",
    rating: 4.8,
    price: 280,
    originalPrice: 350,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Parking"],
    category: "Luxury",
  },
  {
    id: 2,
    name: "Heritance Tea Factory",
    description: "Unique hotel converted from a colonial tea factory in the mountains",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Nuwara Eliya",
    rating: 4.7,
    price: 180,
    originalPrice: 220,
    amenities: ["Mountain Views", "Restaurant", "Spa", "Tours"],
    category: "Heritage",
  },
  {
    id: 3,
    name: "Cape Weligama Resort",
    description: "Clifftop resort with private villas overlooking the Indian Ocean",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Weligama",
    rating: 4.9,
    price: 450,
    originalPrice: 550,
    amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service"],
    category: "Resort",
  },
];

const amenityIcons = {
  "Free WiFi": Wifi,
  "Pool": Waves,
  "Restaurant": Coffee,
  "Parking": Car,
  "Mountain Views": MapPin,
  "Spa": Star,
  "Tours": MapPin,
  "Private Beach": Waves,
  "Infinity Pool": Waves,
  "Butler Service": Star,
};

export function HotelBooking({  }) {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      id="hotels"
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
            Premium Hotels & Resorts
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
            Experience world-class hospitality in Sri Lanka's finest accommodations, from luxury resorts to heritage hotels
          </Typography>
        </Box>

        {/* Hotel Cards */}
        <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
          {hotels.map((hotel) => (
            <Grid item xs={12} lg={4} key={hotel.id}>
              <Card
                sx={{
                  height: "100%",
                  maxWidth: 350,
                  minWidth: 280,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: 6,
                    "& .img-hover": { transform: "scale(1.1)" },
                    "& .title-hover": { color: "#16a34a" },
                  },
                }}
              >
                {/* Image Container */}
                <Box sx={{ position: "relative", height: 256, overflow: "hidden" }}>
                  <ImageWithFallback
                    src={hotel.image}
                    alt={hotel.name}
                    sx={{ transition: "transform 0.3s ease" }}
                    className="img-hover"
                  />

                  {/* Category Badge */}
                  <Chip
                    label={hotel.category}
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
                      {hotel.rating}
                    </Typography>
                  </Box>

                  {/* Discount Badge */}
                  {hotel.originalPrice > hotel.price && (
                    <Chip
                      label={`Save $${hotel.originalPrice - hotel.price}`}
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        bgcolor: "#ef4444",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>

                {/* Card Header */}
                <CardHeader sx={{ pb: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        className="title-hover"
                        sx={{
                          fontWeight: 600,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {hotel.name}
                      </Typography>
                      <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 0.5, color: "#6b7280" }}>
                        <MapPin size={16} />
                        <Typography variant="body2">{hotel.location}</Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Stack direction="row" alignItems="center" gap={1}>
                        {hotel.originalPrice > hotel.price && (
                          <Typography
                            variant="body2"
                            sx={{ textDecoration: "line-through", color: "#9ca3af" }}
                          >
                            ${hotel.originalPrice}
                          </Typography>
                        )}
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#16a34a" }}>
                          ${hotel.price}
                        </Typography>
                      </Stack>
                      <Typography variant="caption" sx={{ color: "#6b7280" }}>
                        per night
                      </Typography>
                    </Box>
                  </Box>
                </CardHeader>

                {/* Card Content */}
                <CardContent sx={{ pt: 0 }}>
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
                    {hotel.description}
                  </Typography>

                  {/* Amenities */}
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                    {hotel.amenities.slice(0, 4).map((amenity) => {
                      const IconComponent = amenityIcons[amenity] || Star;
                      return (
                        <Chip
                          key={amenity}
                          icon={<IconComponent size={12} />}
                          label={amenity}
                          size="small"
                          sx={{
                            bgcolor: "#f3f4f6",
                            color: "#4b5563",
                            fontSize: "0.75rem",
                            "& .MuiChip-icon": { fontSize: 12, ml: 0.5 },
                          }}
                        />
                      );
                    })}
                  </Stack>

                  {/* Book Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/hotels')}
                    sx={{
                      bgcolor: "#16a34a",
                      "&:hover": { bgcolor: "#15803d" },
                      color: "white",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Book Now
                  </Button>
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
            onClick={() => navigate("/hotels")}
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
            View All Hotels
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HotelBooking;