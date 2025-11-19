import React, { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Slider,
  Chip,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ImageWithFallback({ src, alt, sx }) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = "https://via.placeholder.com/800x450?text=Image+not+available";
  return (
    <CardMedia component="img" image={imgSrc} alt={alt} onError={() => setImgSrc(fallback)} sx={sx} />
  );
}

const allHotels = [
  {
    id: 1,
    name: "Shangri-La Colombo",
    description:
      "Luxury waterfront hotel in the heart of Colombo with stunning ocean views and world-class amenities",
    image:
      "https://images.unsplash.com/photo-1732272106767-9dc0a3af6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Colombo",
    rating: 4.8,
    price: 280,
    originalPrice: 350,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Parking", "Spa", "Gym"],
    category: "Luxury",
    type: "City Hotel",
    reviews: 1247,
  },
  {
    id: 2,
    name: "Heritance Tea Factory",
    description: "Unique hotel converted from a colonial tea factory in the cool mountains of Nuwara Eliya",
    image:
      "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Nuwara Eliya",
    rating: 4.7,
    price: 180,
    originalPrice: 220,
    amenities: ["Mountain Views", "Restaurant", "Spa", "Tours", "Free WiFi"],
    category: "Heritage",
    type: "Mountain Resort",
    reviews: 892,
  },
  {
    id: 3,
    name: "Cape Weligama Resort",
    description: "Clifftop resort with private villas overlooking the Indian Ocean and pristine beaches",
    image:
      "https://images.unsplash.com/photo-1743592322694-4ccb9c78b3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Weligama",
    rating: 4.9,
    price: 450,
    originalPrice: 550,
    amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service", "Fine Dining"],
    category: "Resort",
    type: "Beach Resort",
    reviews: 634,
  },
  {
    id: 4,
    name: "Amangalla Galle",
    description: "Historic luxury hotel within the UNESCO World Heritage site of Galle Fort",
    image:
      "https://images.unsplash.com/photo-1689075309597-65efe4f6347b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Galle",
    rating: 4.9,
    price: 520,
    originalPrice: 600,
    amenities: ["Historic Architecture", "Pool", "Spa", "Restaurant", "Library"],
    category: "Luxury",
    type: "Heritage Hotel",
    reviews: 456,
  },
  {
    id: 5,
    name: "Cinnamon Lodge Habarana",
    description: "Eco-friendly resort surrounded by lush gardens and wildlife, perfect for safari adventures",
    image:
      "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Habarana",
    rating: 4.5,
    price: 150,
    originalPrice: 180,
    amenities: ["Safari Tours", "Pool", "Restaurant", "Wildlife Viewing", "Garden Views"],
    category: "Eco Resort",
    type: "Wildlife Lodge",
    reviews: 1089,
  },
  {
    id: 6,
    name: "The Fortress Koggala",
    description: "Contemporary beachfront resort with minimalist design and spectacular ocean views",
    image:
      "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    location: "Koggala",
    rating: 4.6,
    price: 320,
    originalPrice: 400,
    amenities: ["Beach Access", "Pool", "Spa", "Yoga Classes", "Water Sports"],
    category: "Boutique",
    type: "Beach Resort",
    reviews: 723,
  },
];

export default function HotelsPage({ onNavigate = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    return allHotels.filter((h) => {
      const matchesSearch =
        h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        h.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "all" || h.location === locationFilter;
      const matchesCategory = categoryFilter === "all" || h.category === categoryFilter;
      const matchesPrice = h.price >= priceRange[0] && h.price <= priceRange[1];
      return matchesSearch && matchesLocation && matchesCategory && matchesPrice;
    });
  }, [searchTerm, locationFilter, categoryFilter, priceRange]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    switch (sortBy) {
      case "price-low":
        return copy.sort((a, b) => a.price - b.price);
      case "price-high":
        return copy.sort((a, b) => b.price - a.price);
      case "name":
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return copy.sort((a, b) => b.rating - a.rating);
    }
  }, [filtered, sortBy]);

  const resetFilters = () => {
    setLocationFilter("all");
    setCategoryFilter("all");
    setPriceRange([0, 600]);
    setSearchTerm("");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
      <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: 3 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
            Hotels & Resorts in Sri Lanka
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2, flexWrap: "wrap" }}>
            <TextField
              placeholder="Search hotels or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              sx={{ width: { xs: "100%", md: 360 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="outlined" onClick={resetFilters}>
              Clear Filters
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
              </Typography>

              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel>Location</InputLabel>
                <Select value={locationFilter} label="Location" onChange={(e) => setLocationFilter(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="Colombo">Colombo</MenuItem>
                  <MenuItem value="Galle">Galle</MenuItem>
                  <MenuItem value="Weligama">Weligama</MenuItem>
                  <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select value={categoryFilter} label="Category" onChange={(e) => setCategoryFilter(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="Luxury">Luxury</MenuItem>
                  <MenuItem value="Resort">Resort</MenuItem>
                  <MenuItem value="Heritage">Heritage</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Typography>
              <Slider value={priceRange} onChange={(e, v) => setPriceRange(v)} min={0} max={600} />

              <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={resetFilters}>
                Reset
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} lg={9}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Showing {sorted.length} results
              </Typography>

              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel>Sort by</InputLabel>
                <Select value={sortBy} label="Sort by" onChange={(e) => setSortBy(e.target.value)}>
                  <MenuItem value="rating">Best Rating</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name">Name: A to Z</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={2}>
              {sorted.map((hotel) => (
                <Grid key={hotel.id} item xs={12} sm={6} md={6}>
                  <Card sx={{ height: 440, display: "flex", flexDirection: "column", width: "100%" }}>
                    <ImageWithFallback src={hotel.image} alt={hotel.name} sx={{ height: 200, objectFit: "cover" }} />

                    <CardContent sx={{ flexGrow: 1, minHeight: 140 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {hotel.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {hotel.location} • {hotel.type}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {hotel.description}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {hotel.amenities.slice(0, 4).map((a) => (
                          <Chip key={a} label={a} size="small" sx={{ bgcolor: "#f1f5f9" }} />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <StarIcon sx={{ color: "#f59e0b" }} />
                        <Typography variant="body2">{hotel.rating}</Typography>
                      </Box>
                      <Button variant="contained" color="success">
                        Book Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}