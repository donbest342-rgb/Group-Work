// src/components/UserDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ← Your real auth

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  Button,
  Tabs,
  Tab,
  Paper,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  User,
  Calendar,
  MapPin,
  Clock,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  Plane,
  Hotel,
  Car,
  Camera,
} from "lucide-react";

// Reusable Image with fallback
function ImageWithFallback({ src, alt, sx }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
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
        {alt?.[0] || "U"}
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
        borderRadius: "8px",
        display: "block",
      }}
    />
  );
}

export function UserDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth(); // ← Real user from backend!

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Show loading spinner while fetching user
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f9fafb",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#16a34a" }} />
      </Box>
    );
  }

  // If no user (shouldn't happen if protected route, but safe)
  if (!user) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb", p: 4 }}>
        <Container>
          <Alert severity="error">
            You must be logged in to view this page.
            <Button onClick={() => navigate("/login")} sx={{ ml: 2 }}>
              Go to Login
            </Button>
          </Alert>
        </Container>
      </Box>
    );
  }

  // Real user data from backend
  const displayName = user.name || user.username || user.email?.split("@")[0] || "User";
  const displayEmail = user.email || "No email";
  const memberSince = user.createdAt ? new Date(user.createdAt).getFullYear() : "2025";

  // You can later fetch these from an API using user.id
  const stats = {
    totalTrips: 7,
    upcomingTrips: 2,
    loyaltyPoints: 2450,
    avgRating: 4.8,
  };

  const quickActions = [
    { icon: Plane, label: "Book Flight", color: "#3b82f6" },
    { icon: Hotel, label: "Find Hotels", color: "#16a34a" },
    { icon: Car, label: "Rent Car", color: "#f59e0b" },
    { icon: Camera, label: "Tours", color: "#8b5cf6" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Header - Real User Info */}
        <Box sx={{ mb: 6 }}>
          <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={3} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Avatar
              src={user.avatar || user.profileImage}
              alt={displayName}
              sx={{
                width: 100,
                height: 100,
                border: "4px solid white",
                boxShadow: 3,
                fontSize: "2.5rem",
                bgcolor: "#16a34a",
              }}
            >
              {displayName[0].toUpperCase()}
            </Avatar>
            <Box>
              <Stack direction="row" alignItems="center" gap={1}>
                <User size={20} style={{ color: "#16a34a" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#111827" }}>
                  {displayName}
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "#6b7280" }}>
                {displayEmail}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Chip label={`Member since ${memberSince}`} size="small" sx={{ bgcolor: "#ecfdf5", color: "#166534" }} />
                <Chip
                  label={`${stats.loyaltyPoints} points`}
                  size="small"
                  icon={<Star size={14} style={{ color: "#fbbf24" }} />}
                  sx={{ bgcolor: "#fffbeb", color: "#d97706" }}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: "#ecfdf5", border: "1px solid #bbf7d0" }}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ bgcolor: "#16a34a", color: "white", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Plane size={24} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#166534" }}>
                    {stats.totalTrips}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#166534" }}>Total Trips</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ bgcolor: "#16a34a", color: "white", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Calendar size={24} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#166534" }}>
                    {stats.upcomingTrips}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#166534" }}>Upcoming</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: "#ecfdf5", border: "1px solid #bbf7d0" }}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ bgcolor: "#16a34a", color: "white", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Star size={24} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#166534" }}>
                    {stats.avgRating}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#166534" }}>Avg. Rating</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tabs & Content */}
        <Paper elevation={0} sx={{ mb: 4, border: "1px solid #e5e7eb", borderRadius: "12px" }}>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} variant="fullWidth"
            sx={{
              "& .MuiTab-root": { textTransform: "none", fontWeight: 600, color: "#6b7280", "&.Mui-selected": { color: "#16a34a" } },
              "& .MuiTabs-indicator": { bgcolor: "#16a34a" },
            }}
          >
            <Tab label="Upcoming Trips" />
            <Tab label="Order History" />
            <Tab label="Quick Actions" />
          </Tabs>
        </Paper>

        {/* You can later fetch real trips/history using user.id */}
        {activeTab === 0 && (
          <Alert severity="info" sx={{ mb: 3 }}>
            Your upcoming trips will appear here once booked.
          </Alert>
        )}

        {activeTab === 1 && (
          <Alert severity="info" sx={{ mb: 3 }}>
            Your booking history will appear here.
          </Alert>
        )}

        {activeTab === 2 && (
          <Grid container spacing={3}>
            {quickActions.map((action) => (
              <Grid item xs={6} sm={3} key={action.label}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<action.icon size={20} />}
                  sx={{
                    height: 100,
                    flexDirection: "column",
                    gap: 1,
                    borderColor: action.color,
                    color: action.color,
                    "&:hover": { bgcolor: `${action.color}08`, borderColor: action.color },
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {action.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Account Actions */}
        <Grid container spacing={3} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Account Settings</Typography>
                <Stack spacing={2}>
                  <Button onClick={() => navigate('/dashboard/edituser')  }
                  fullWidth variant="text" startIcon={<User size={18} />} sx={{ justifyContent: "flex-start", color: "#374151" }}>
                    Edit Profile
                  </Button>
                  <Button fullWidth variant="text" startIcon={<Settings size={18} />} sx={{ justifyContent: "flex-start", color: "#374151" }}>
                    Preferences
                  </Button>
                  <Button onClick={() => navigate('/dashboard/payments')  }
                  fullWidth variant="text" startIcon={<CreditCard size={18} />} sx={{ justifyContent: "flex-start", color: "#374151" }}>
                    Payment Methods
                  </Button>
                  <Divider />
                  <Button fullWidth variant="text" startIcon={<LogOut size={18} />} onClick={handleLogout} sx={{ justifyContent: "flex-start", color: "#dc2626" }}>
                    Sign Out
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Need Help?</Typography>
                <Typography variant="body2" sx={{ color: "#6b7280", mb: 3 }}>
                  Our support team is available 24/7 to assist with bookings, changes, or any questions.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button variant="contained" size="large" href="https://wa.link/bzvfpp" sx={{ bgcolor: "#16a34a", "&:hover": { bgcolor: "#15803d" }, flex: 1 }}>
                    Contact Support
                  </Button>
                  <Button variant="outlined" size="large" sx={{ borderColor: "#16a34a", color: "#16a34a", flex: 1 }}>
                    View FAQ
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default UserDashboard;