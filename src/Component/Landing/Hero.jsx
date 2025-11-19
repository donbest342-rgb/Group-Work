// src/components/Hero.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Built-in ImageWithFallback (no external dependency)
function ImageWithFallback({ src, alt, sx }) {
  const [hasError, setHasError] = useState(false);
  

  if (hasError) {
    return (
      <Box
        sx={{
          ...sx,
          background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Sri Lanka
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
        display: "block",
      }}
    />
  );
}

export function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const destinations = [
    { value: "colombo", label: "Colombo" },
    { value: "kandy", label: "Kandy" },
    { value: "galle", label: "Galle" },
    { value: "ella", label: "Ella" },
    { value: "sigiriya", label: "Sigiriya" },
    { value: "nuwara-eliya", label: "Nuwara Eliya" },
  ];

  const guestOptions = [
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
    { value: "5", label: "5+ Guests" },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: '2.3em 0',
        paddingBottom: '3.5em'
      }}
    >
      {/* Background + Overlay */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sigiriya Rock Fortress, Sri Lanka"
          sx={{ width: "100%", height: "100%" }}
        />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.4)" }} />
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "white",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.3rem" },
            fontWeight: "bold",
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          Discover the Pearl of the Indian Ocean
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.5rem", md: "1.2rem" },
            mb: 4,
            color: "#e5e7eb",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Explore ancient temples, pristine beaches, lush tea plantations, and vibrant culture in beautiful Sri Lanka
        </Typography>
        <Button variant="contained" color="success" size="large"
        onClick={() => navigate('/destination')}
        sx={{ display: { xs:'text', sm: 'none', md: 'none'}}}>
          Start Touring
        </Button>

        {/* Search Card */}
        <Paper
          elevation={8}
          sx={{
            bgcolor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "12px",
            p: { xs: 3, md: 4 },
            maxWidth: "700px",
            mx: "auto",
            display: {xs: 'none', sm: 'block', md: 'block'}
          }}
        >
          <Stack spacing={3} sx={{ justifyContent: 'center'}}>
            {/* Form Grid */}
            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
                gap: 2,
              }}
            >
              {/* Destination */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#374151",
                    mb: 0.5,
                    fontWeight: 500,
                  }}
                >
                  <MapPin size={16} />
                  Destination
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    displayEmpty
                    input={<OutlinedInput sx={{ bgcolor: "white" }} />}
                  >
                    <MenuItem value="" disabled>
                      Choose destination
                    </MenuItem>
                    {destinations.map((d) => (
                      <MenuItem key={d.value} value={d.value}>
                        {d.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* Check-in */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#374151",
                    mb: 0.5,
                    fontWeight: 500,
                  }}
                >
                  <Calendar size={16} />
                  Check-in
                </Typography>
                <TextField
                  type="date"
                  fullWidth
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  sx={{ bgcolor: "white"}}
                />
              </Box>

              {/* Check-out */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#374151",
                    mb: 0.5,
                    fontWeight: 500,
                  }}
                >
                  <Calendar size={16} />
                  Check-out
                </Typography>
                <TextField
                  type="date"
                  fullWidth
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  sx={{ bgcolor: "white"}}
                />
              </Box>

              {/* Guests */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#374151",
                    mb: 0.5,
                    fontWeight: 500,
                  }}
                >
                  <Users size={16} />
                  Guests
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    displayEmpty
                    input={<OutlinedInput sx={{ bgcolor: "white" }} />}
                  >
                    <MenuItem value="" disabled>
                      Guests
                    </MenuItem>
                    {guestOptions.map((g) => (
                      <MenuItem key={g.value} value={g.value}>
                        {g.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Search Button */}
            <Box fullWidth
            sx={{ mt: 2, 
            display: 'flex', 
            justifyContent: 'center',

            textAlign: { xs: "center", md: "left" } }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate('/hotels')}
                sx={{
                  bgcolor: "#16a34a",
                  "&:hover": { bgcolor: "#15803d" },
                  color: "white",
                  px: 4,
                  py: 1.5,
                  minWidth: { xs: "100%", md: "auto" },
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  // marginLeft: 'auto',
                  // marginRight: 'auto',
                }}
              >
                Search Hotels & Experiences
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default Hero;