// src/components/UserProfileEdit.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
  Chip,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  ChevronLeft,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Built-in ImageWithFallback
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
          borderRadius: "50%",
        }}
      >
        {alt.charAt(0).toUpperCase()}
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
        borderRadius: "50%",
      }}
    />
  );
}

export function UserProfileEdit({ onBack }) {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Perera",
    email: "alex.perera@email.com",
    phone: "+94 77 123 4567",
    country: "Sri Lanka",
    city: "Colombo",
    birthDate: "1990-05-15",
    bio: "Passionate traveler and photographer. Love exploring ancient temples and hidden beaches in Sri Lanka.",
    notifications: true,
    newsletter: false,
  });

  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Saving profile:", formData);
    // Add API call here
    alert("Profile saved successfully!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f9fafb",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ChevronLeft size={20} />}
            onClick={() => navigate(-1)}
            sx={{
              color: "#374151",
              textTransform: "none",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Back to Dashboard
          </Button>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            Edit Profile
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b7280", mt: 1 }}>
            Update your personal information and preferences
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Avatar Section */}
          <Box
            sx={{
              bgcolor: "#f0fdf4",
              p: 4,
              textAlign: "center",
              position: "relative",
            }}
          >
            <input
              accept="image/*"
              type="file"
              id="avatar-upload"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar-upload">
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    border: "4px solid white",
                    boxShadow: 3,
                  }}
                >
                  <ImageWithFallback
                    src={avatar}
                    alt={`${formData.firstName} ${formData.lastName}`}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Avatar>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: "#16a34a",
                    color: "white",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid white",
                  }}
                >
                  <Camera size={18} />
                </Box>
              </Box>
            </label>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
              {formData.firstName} {formData.lastName}
            </Typography>
            <Chip
              label="Premium Member"
              size="small"
              sx={{
                mt: 1,
                bgcolor: "#ecfdf5",
                color: "#166534",
                fontWeight: 500,
              }}
            />
          </Box>

          <Divider />

          {/* Form */}
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            <Grid container spacing={3}>
              {/* Personal Info */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                  Personal Information
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <User size={18} sx={{ color: "#9ca3af", mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Mail size={18} sx={{ color: "#9ca3af", mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Phone size={18} sx={{ color: "#9ca3af", mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    startAdornment={<MapPin size={18} sx={{ color: "#9ca3af", mr: 1 }} />}
                  >
                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Maldives">Maldives</MenuItem>
                    <MenuItem value="Thailand">Thailand</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <Calendar size={18} sx={{ color: "#9ca3af", mr: 1 }} />,
                  }}
                />
              </Grid>

              {/* Bio */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>

              {/* Preferences */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                  Notification Preferences
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Email Notifications
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      Receive updates about your bookings and offers
                    </Typography>
                  </Box>
                  <Button
                    variant={formData.notifications ? "contained" : "outlined"}
                    size="small"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, notifications: !prev.notifications }))
                    }
                    sx={{
                      minWidth: 80,
                      bgcolor: formData.notifications ? "#16a34a" : "transparent",
                      color: formData.notifications ? "white" : "#16a34a",
                      borderColor: "#16a34a",
                      "&:hover": {
                        bgcolor: formData.notifications ? "#15803d" : "rgba(22, 163, 74, 0.04)",
                      },
                    }}
                  >
                    {formData.notifications ? "ON" : "OFF"}
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Newsletter
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      Get travel tips and exclusive deals
                    </Typography>
                  </Box>
                  <Button
                    variant={formData.newsletter ? "contained" : "outlined"}
                    size="small"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, newsletter: !prev.newsletter }))
                    }
                    sx={{
                      minWidth: 80,
                      bgcolor: formData.newsletter ? "#16a34a" : "transparent",
                      color: formData.newsletter ? "white" : "#16a34a",
                      borderColor: "#16a34a",
                      "&:hover": {
                        bgcolor: formData.newsletter ? "#15803d" : "rgba(22, 163, 74, 0.04)",
                      },
                    }}
                  >
                    {formData.newsletter ? "ON" : "OFF"}
                  </Button>
                </Stack>
              </Grid>

              {/* Actions */}
              <Grid item xs={12}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    startIcon={<Save size={20} />}
                    onClick={handleSave}
                    sx={{
                      bgcolor: "#16a34a",
                      "&:hover": { bgcolor: "#15803d" },
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    onClick={onBack}
                    sx={{
                      borderColor: "#d1d5db",
                      color: "#374151",
                      textTransform: "none",
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default UserProfileEdit;