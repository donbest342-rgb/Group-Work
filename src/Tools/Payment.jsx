// src/components/PaymentMethods.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Stack,
  Chip,
  Grid,
  Divider,
  Radio,
  FormControlLabel,
  FormControl,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  CreditCard,
  Plus,
  Trash2,
  Edit2,
  ChevronLeft,
  Check,
  AlertCircle,
  Lock,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockCards = [
  {
    id: 1,
    type: "visa",
    last4: "4242",
    expiry: "12/27",
    name: "Alex Perera",
    isDefault: true,
    brand: "Visa",
  },
  {
    id: 2,
    type: "mastercard",
    last4: "8888",
    expiry: "09/26",
    name: "Alex Perera",
    isDefault: false,
    brand: "Mastercard",
  },
];

export function PaymentMethods({ onBack }) {
    const navigate = useNavigate();
  const [cards, setCards] = useState(mockCards);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCard = () => {
    const newCard = {
      id: Date.now(),
      type: formData.cardNumber.startsWith("4") ? "visa" : "mastercard",
      last4: formData.cardNumber.slice(-4),
      expiry: formData.expiry,
      name: formData.cardName,
      isDefault: cards.length === 0,
      brand: formData.cardNumber.startsWith("4") ? "Visa" : "Mastercard",
    };
    setCards((prev) => [...prev, newCard]);
    setOpenAddDialog(false);
    setFormData({ cardNumber: "", cardName: "", expiry: "", cvv: "" });
  };

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleSetDefault = (id) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        isDefault: card.id === id,
      }))
    );
  };

  const CardIcon = ({ type }) => {
    const iconStyle = { width: 40, height: 40 };
    if (type === "visa")
      return (
        <Box
          sx={{
            ...iconStyle,
            bgcolor: "#1a1f71",
            color: "white",
            borderRadius: 1,
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "0.8rem",
          }}
        >
          VISA
        </Box>
      );
    if (type === "mastercard")
      return (
        <Box
          sx={{
            ...iconStyle,
            bgcolor: "#eb001b",
            color: "white",
            borderRadius: 1,
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "0.7rem",
          }}
        >
          MC
        </Box>
      );
    return <CreditCard style={iconStyle} />;
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
            Payment Methods
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b7280", mt: 1 }}>
            Manage your saved cards and payment preferences
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
          {/* Header Section */}
          <Box
            sx={{
              bgcolor: "#f0fdf4",
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  bgcolor: "#16a34a",
                  color: "white",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Lock size={24} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Secure Payments
                </Typography>
                <Typography variant="body2" sx={{ color: "#166534" }}>
                  Your payment information is encrypted and secure
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              startIcon={<Plus size={18} />}
              onClick={() => setOpenAddDialog(true)}
              sx={{
                bgcolor: "#16a34a",
                "&:hover": { bgcolor: "#15803d" },
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Add Card
            </Button>
          </Box>

          <Divider />

          {/* Saved Cards */}
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            {cards.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 6 }}>
                <CreditCard size={48} style={{ color: "#9ca3af", marginBottom: 16 }} />
                <Typography variant="h6" sx={{ color: "#6b7280", mb: 1 }}>
                  No payment methods saved
                </Typography>
                <Typography variant="body2" sx={{ color: "#9ca3af", mb: 3 }}>
                  Add a card to make bookings faster and easier
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<Plus size={18} />}
                  onClick={() => setOpenAddDialog(true)}
                  sx={{
                    bgcolor: "#16a34a",
                    "&:hover": { bgcolor: "#15803d" },
                  }}
                >
                  Add Your First Card
                </Button>
              </Box>
            ) : (
              <Stack spacing={3}>
                {cards.map((card) => (
                  <Paper
                    key={card.id}
                    variant="outlined"
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      borderColor: card.isDefault ? "#16a34a" : "#e5e7eb",
                      bgcolor: card.isDefault ? "#f0fdf4" : "white",
                      position: "relative",
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={8}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <CardIcon type={card.type} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              •••• •••• •••• {card.last4}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#6b7280" }}>
                              {card.name} • Expires {card.expiry}
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                          alignItems="center"
                        >
                          {card.isDefault && (
                            <Chip
                              label="Default"
                              size="small"
                              icon={<Check size={14} />}
                              sx={{
                                bgcolor: "#16a34a",
                                color: "white",
                                fontWeight: 600,
                              }}
                            />
                          )}
                          {!card.isDefault && (
                            <Button
                              size="small"
                              onClick={() => handleSetDefault(card.id)}
                              sx={{
                                color: "#16a34a",
                                borderColor: "#16a34a",
                                textTransform: "none",
                              }}
                            >
                              Set Default
                            </Button>
                          )}
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteCard(card.id)}
                            sx={{ color: "#dc2626" }}
                          >
                            <Trash2 size={16} />
                          </IconButton>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Stack>
            )}
          </Box>

          {/* Security Info */}
          <Box sx={{ bgcolor: "#f9fafb", p: 4, borderTop: "1px solid #e5e7eb" }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <AlertCircle size={20} style={{ color: "#f59e0b", flexShrink: 0 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Your payment information is secure
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  We use industry-standard encryption to protect your payment details. 
                  Your card information is never stored on our servers.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>

      {/* Add Card Dialog */}
      <Dialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Add New Card
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              InputProps={{
                startAdornment: <CreditCard size={18} sx={{ color: "#9ca3af", mr: 1 }} />,
              }}
            />
            <TextField
              fullWidth
              label="Cardholder Name"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              placeholder="Alex Perera"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 2,
                bgcolor: "#f0fdf4",
                borderRadius: 1,
                border: "1px solid #bbf7d0",
              }}
            >
              <Lock size={16} style={{ color: "#16a34a" }} />
              <Typography variant="body2" sx={{ color: "#166534" }}>
                Your card details are encrypted and secure
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={() => setOpenAddDialog(false)}
            sx={{ color: "#374151" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddCard}
            sx={{
              bgcolor: "#16a34a",
              "&:hover": { bgcolor: "#15803d" },
            }}
          >
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PaymentMethods;