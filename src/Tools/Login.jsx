// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Box, Container, Paper, Typography, TextField, Button, Stack,
  Divider, CircularProgress, Alert, IconButton, InputAdornment
} from "@mui/material";
import { Mail, Lock, ChevronRight } from "lucide-react";
import { Google, Facebook, VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();        // Your real login function
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    await login(email, password); // ← This now uses your fixed post()
    navigate("/dashboard");
  } catch (err) {
    setError(err.message || "Login failed");
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
              <Lock size={40} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827" }}>Welcome Back</Typography>
            <Typography sx={{ color: "#4b5563" }}>Sign in to continue your adventure</Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 } }}>
            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <form onSubmit={handleLogin}>
              <Stack spacing={3}>
                <TextField 
                  fullWidth 
                  label="Email Address" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} sx={{ color: "#9ca3af" }} />
                      </InputAdornment>
                    )
                  }}
                  sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#f9fafb" } }} 
                />
                
                <TextField 
                  fullWidth 
                  label="Password" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} sx={{ color: "#9ca3af" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#f9fafb" } }} 
                />

                <Button 
                  fullWidth 
                  type="submit" 
                  variant="contained" 
                  disabled={!email || !password}
                  sx={{ bgcolor: "#16a34a", "&:hover": { bgcolor: "#15803d" }, py: 1.5 }}
                >
                  {loading ? <CircularProgress size={24} /> : "Sign In"}
                  
                </Button>
              </Stack>
            </form>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 4 }}>
              <Divider sx={{ flex: 1 }} />
              <Typography sx={{ color: "#9ca3af" }}>OR</Typography>
              <Divider sx={{ flex: 1 }} />
            </Stack>

            <Stack spacing={2}>
              <Button fullWidth variant="outlined" startIcon={<Google />}>
                Continue with Google
              </Button>
              <Button fullWidth variant="outlined" startIcon={<Facebook />}>
                Continue with Facebook
              </Button>
            </Stack>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button 
                endIcon={<ChevronRight size={16} />} 
                sx={{ color: "#16a34a" }} 
                onClick={() => navigate("/signup")}
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;