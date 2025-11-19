// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Box, Container, Paper, Typography, TextField, Button, Stack, Divider, CircularProgress, Alert
} from "@mui/material";
import { User, Mail, Phone, MapPin, Lock } from "lucide-react";

export function Signup() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", address: "", phoneNumber: "", email: "", password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb", display: "flex", alignItems: "center", py: 4 }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: "16px", overflow: "hidden" }}>
          <Box sx={{ bgcolor: "#f0fdf4", p: { xs: 4, md: 6 }, textAlign: "center" }}>
            <Box sx={{ width: 80, height: 80, mx: "auto", mb: 3, bgcolor: "#16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              <User size={40} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827" }}>Create Account</Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 } }}>
            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <form onSubmit={handleSignup}>
              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField fullWidth label="First Name" name="firstName" onChange={handleChange} required />
                  <TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} required />
                </Stack>
                <TextField fullWidth label="Address" name="address" onChange={handleChange} required InputProps={{ startAdornment: <MapPin size={20} sx={{ color: "#9ca3af", mr: 1 }} /> }} />
                <TextField fullWidth label="Phone Number" name="phoneNumber" onChange={handleChange} required InputProps={{ startAdornment: <Phone size={20} sx={{ color: "#9ca3af", mr: 1 }} /> }} />
                <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} required InputProps={{ startAdornment: <Mail size={20} sx={{ color: "#9ca3af", mr: 1 }} /> }} />
                <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} required InputProps={{ startAdornment: <Lock size={20} sx={{ color: "#9ca3af", mr: 1 }} /> }} />

                <Button fullWidth type="submit" variant="contained" disabled={loading}
                  sx={{ bgcolor: "#16a34a", "&:hover": { bgcolor: "#15803d" }, py: 1.5 }}>
                  {loading ? <CircularProgress size={24} /> : "Create Account"}
                </Button>
              </Stack>
            </form>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography sx={{ color: "#6b7280" }}>
                Already have an account?{" "}
                <Button sx={{ color: "#16a34a" }} onClick={() => navigate("/login")}>Sign In</Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup