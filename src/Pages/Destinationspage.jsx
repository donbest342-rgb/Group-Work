import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TerrainIcon from '@mui/icons-material/Terrain';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Badge, Button, Card, CardContent, CardHeader, Chip, FormControl, Box, IconButton, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { BorderColorOutlined } from '@mui/icons-material';

// === YOUR ORIGINAL DATA (unchanged) ===
const allDestinations = [
  {
    id: 'sigiriya',
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and UNESCO World Heritage site with stunning frescoes, impressive gardens, and a remarkable palace complex built by King Kashyapa in the 5th century.",
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Central Province",
    province: "Central",
    duration: "Half day",
    rating: 4.8,
    category: "Historical",
    difficulty: "Moderate",
    bestTime: "Dec-Apr",
    entryFee: "$30",
    highlights: ["Ancient frescoes", "Mirror Wall", "Lion's Gate", "Royal palace ruins"]
  },
  {
    id: 'mirissa',
    name: "Mirissa Beach",
    description: "Perfect golden sand beach renowned for whale watching, surfing, and tropical relaxation with crystal clear waters and swaying palm trees.",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southern Coast",
    province: "Southern",
    duration: "Full day",
    rating: 4.7,
    category: "Beach",
    difficulty: "Easy",
    bestTime: "Nov-Apr",
    entryFee: "Free",
    highlights: ["Whale watching", "Surfing", "Beach relaxation", "Sunset views"]
  },
  {
    id: 'nuwara-eliya',
    name: "Nuwara Eliya Tea Country",
    description: "Rolling green tea plantations and cool mountain climate in the hill country, known as 'Little England' for its colonial architecture.",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Hill Country",
    province: "Central",
    duration: "2-3 days",
    rating: 4.9,
    category: "Nature",
    difficulty: "Easy",
    bestTime: "Dec-Mar",
    entryFee: "Varies",
    highlights: ["Tea factory tours", "Mountain views", "Cool climate", "Colonial architecture"]
  },
  {
    id: 'yala',
    name: "Yala National Park",
    description: "Premier wildlife sanctuary famous for leopards, elephants, and diverse bird species. Best place in Sri Lanka for wildlife photography.",
    image: "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGVsZXBoYW50JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southeast Coast",
    province: "Uva",
    duration: "1-2 days",
    rating: 4.6,
    category: "Wildlife",
    difficulty: "Easy",
    bestTime: "Feb-Jul",
    entryFee: "$25",
    highlights: ["Leopard sightings", "Elephant herds", "Bird watching", "Safari adventures"]
  },
  {
    id: 'kandy',
    name: "Kandy Sacred City",
    description: "The cultural capital of Sri Lanka, home to the Temple of the Sacred Tooth Relic and beautiful botanical gardens.",
    image: "https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYW5keSUyMHRlbXBsZSUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc1NTk0Nzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Kandy",
    province: "Central",
    duration: "1-2 days",
    rating: 4.7,
    category: "Cultural",
    difficulty: "Easy",
    bestTime: "Dec-Apr",
    entryFee: "$10",
    highlights: ["Temple of Tooth", "Botanical Gardens", "Cultural shows", "Lake views"]
  },
  {
    id: 'galle',
    name: "Galle Dutch Fort",
    description: "UNESCO World Heritage Dutch colonial fort with cobblestone streets, ramparts, and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1704797390682-76479a29dc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZSUyMGZvcnQlMjBzcmklMjBsYW5rYXxlbnwxfHx8fDE3NTU4NDQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Galle",
    province: "Southern",
    duration: "Half day",
    rating: 4.5,
    category: "Historical",
    difficulty: "Easy",
    bestTime: "Nov-Mar",
    entryFee: "Free",
    highlights: ["Dutch architecture", "Fort ramparts", "Museums", "Ocean views"]
  },
  {
    id: 'ella',
    name: "Ella Hill Country",
    description: "Picturesque mountain town famous for its train journey, Nine Arch Bridge, and stunning mountain vistas.",
    image: "https://images.unsplash.com/photo-1704797389166-c7dac99fc633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGxhJTIwc3JpJTIwbGFua2ElMjB0cmFpbnxlbnwxfHx8fDE3NTU4NDQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Ella",
    province: "Uva",
    duration: "1-2 days",
    rating: 4.8,
    category: "Nature",
    difficulty: "Moderate",
    bestTime: "Dec-Mar",
    entryFee: "Free",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Train journey", "Tea plantations"]
  },
  {
    id: 'anuradhapura',
    name: "Anuradhapura Ancient City",
    description: "Ancient capital with sacred Buddhist temples, massive dagobas, and ruins dating back over 2,000 years.",
    image: "https://images.unsplash.com/photo-1524508570421-362500b7fd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdpcml5YSUyMHJvY2slMjBzcmklMjBsYW5rYSUyMGFlcmlhbHxlbnwxfHx8fDE3NTU5Mzk0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "North Central",
    province: "North Central",
    duration: "Full day",
    rating: 4.6,
    category: "Historical",
    difficulty: "Easy",
    bestTime: "Dec-Mar",
    entryFee: "$25",
    highlights: ["Sacred Bodhi Tree", "Ancient dagobas", "Ruins exploration", "Buddhist heritage"]
  }

];

const categoryIcons = {
  "Historical": ApartmentOutlinedIcon,
  "Beach": WaterOutlinedIcon,
  "Nature": ForestOutlinedIcon,
  "Wildlife": CameraAltOutlinedIcon,
  "Cultural": ApartmentOutlinedIcon,
  "Mountain": TerrainIcon
};

export function DestinationsPage({}) {
  const onNavigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [provinceFilter, setProvinceFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || destination.category === categoryFilter;
    const matchesProvince = provinceFilter === "all" || destination.province === provinceFilter;
    const matchesDuration = durationFilter === "all" || destination.duration === durationFilter;

    return matchesSearch && matchesCategory && matchesProvince && matchesDuration;
  });

  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case "rating": return b.rating - a.rating;
      case "name": return a.name.localeCompare(b.name);
      case "location": return a.location.localeCompare(b.location);
      default: return 0;
    }
  });

  const categories = ["Historical", "Beach", "Nature", "Wildlife", "Cultural"];
  const provinces = ["Central", "Southern", "Uva", "North Central"];
  const durations = ["Half day", "Full day", "1-2 days", "2-3 days"];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return { bg: '#dcfce7', text: '#166534' };
      case 'Moderate': return { bg: '#fef9c3', text: '#854d0e' };
      case 'Hard': return { bg: '#fee2e2', text: '#991b1b' };
      default: return { bg: '#f3f4f6', text: '#374151' };
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 4, lg: 8 }, py: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Button
              variant="text"
              onClick={() => onNavigate('/')}
              size='small'
              sx={{ color: '#16a34a', '&:hover': { color: '#15803d' } }}
            >
              <ArrowBackOutlinedIcon sx={{ fontSize: 16, mr: 1 }} />
              Back to Home
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', gap: 4 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
                Explore Sri Lanka's Top Destinations
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280' }}>
                {sortedDestinations.length} destinations found • From ancient temples to pristine beaches
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ position: 'relative', width: { xs: '100%', md: 320 } }}>
                <SearchIcon sx={{ position: 'absolute', left: 12, top: 12, fontSize: 16, color: '#9ca3af' }} />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ pl: 5, width: '100%' }}
                />
              </Box>
              <Button
                variant="outlined"
                onClick={() => setShowFilters(!showFilters)}
                sx={{ display: { lg: 'none' } }}
              >
                <FilterAltIcon sx={{ fontSize: 16, mr: 1 }} />
                Filters
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Layout: Filters (Left) + Results (Right) */}
      <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 4, lg: 8 }, py: 6 }}>
        {/* Category Quick Filters */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 6 }}>
          <Button
            variant={categoryFilter === "all" ? "contained" : "outlined"}
            onClick={() => setCategoryFilter("all")}
            size='small'
            sx={{
              border: '#5350506c 0.5px solid',
              borderRadius: 2,
              bgcolor: categoryFilter === "all" ? '#16a34a' : 'transparent',
              color: categoryFilter === "all" ? '#fff' : '#000000ff',
              '&:hover': { bgcolor: categoryFilter === "all" ? '#15803d' : '#f3f4f6' },
            }}
          >
            All Categories
          </Button>
          {categories.map((category) => {
            const Icon = categoryIcons[category] || BorderColorOutlined;
            return (
              <Button
                key={category}
                variant={categoryFilter === category ? "contained" : "outlined"}
                onClick={() => setCategoryFilter(category)}
                size='small'
                sx={{
                  border: '#5350506c 0.5px solid',
                  borderRadius: 2,
                  bgcolor: categoryFilter === category ? '#16a34a' : 'transparent',
                  color: categoryFilter === category ? '#fff' : '#000000ff',
                  '&:hover': { bgcolor: categoryFilter === category ? '#15803d' : '#f3f4f6' },
                }}
              >
                <Icon sx={{ fontSize: 16, mr: 1 }} />
                {category}
              </Button>
            );
          })}
        </Box>

        {/* GRID LAYOUT: Filters (left) + Results (right) */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
          {/* === LEFT: FILTERS SIDEBAR === */}
          <Box
            sx={{
              width: { xs: '100%', lg: 280 },
              flexShrink: 0,
              display: { xs: showFilters ? 'block' : 'none', lg: 'block' },
            }}
          >
            <Card>
              <CardHeader title={<Typography variant="h6">Filters</Typography>} />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Province</InputLabel>
                  <Select value={provinceFilter} onChange={(e) => setProvinceFilter(e.target.value)} label="Province">
                    <MenuItem value="all">All provinces</MenuItem>
                    {provinces.map((p) => (
                      <MenuItem key={p} value={p}>{p}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Duration</InputLabel>
                  <Select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)} label="Duration">
                    <MenuItem value="all">Any duration</MenuItem>
                    {durations.map((d) => (
                      <MenuItem key={d} value={d}>{d}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ '&:hover': { color: 'rgba(6, 43, 4, 1)' } }}
                  onClick={() => {
                    setCategoryFilter("all");
                    setProvinceFilter("all");
                    setDurationFilter("all");
                    setSearchTerm("");
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </Box>

          {/* === RIGHT: RESULTS GRID === */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography sx={{ color: '#6b7280' }}>
                Showing {sortedDestinations.length} destinations
              </Typography>
              <FormControl size='small' sx={{ width: 180 }}>
                <InputLabel>Sort by</InputLabel>
                <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} label="Sort by">
                  <MenuItem value="rating">Best Rating</MenuItem>
                  <MenuItem value="name">Name: A to Z</MenuItem>
                  <MenuItem value="location">Location</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'grid', gap: 6, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' } }}>
              {sortedDestinations.map((destination) => {
                const Icon = categoryIcons[destination.category] || BorderColorOutlined;
                const difficultyColor = getDifficultyColor(destination.difficulty);

                return (
                  <Card
                    key={destination.id}
                    sx={{
                      maxWidth: 450,
                      cursor: 'pointer',
                      borderRadius: 6,
                      transition: 'all 0.3s',
                      '&:hover': { boxShadow: 6 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box sx={{ height: 192, overflow: 'hidden', position: 'relative' }}>
                      <Box
                        component="img"
                        src={destination.image}
                        alt={destination.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.1)' },
                        }}
                      />
                      <Badge
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          bgcolor: 'rgba(255, 255, 255, 1)',
                          color: '#000000ff',
                          fontWeight: 500,
                          fontSize: 16,
                          alignItems: 'center',
                          padding: '4px 8px',
                          borderRadius: 2,
                        }}
                      >
                        <Icon sx={{ fontSize: 16, mr: 0.5 }} />
                        {destination.category}
                      </Badge>
                      <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
                        <Chip
                          icon={<StarBorderIcon sx={{ fontSize: 12, color: '#facc15' }} />}
                          label={destination.rating}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.9)', fontWeight: 600 }}
                        />
                        <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.9)' }}>
                          <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Box>
                      <Badge
                        sx={{
                          position: 'absolute',
                          top: 165,
                          left: 12,
                          bgcolor: '#16a34a',
                          color: 'white',
                          fontWeight: 600,
                          padding: '2px 7px',
                          borderRadius: 2,
                        }}
                      >
                        {destination.entryFee}
                      </Badge>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 1, '&:hover': { color: '#16a34a' } }}
                      >
                        {destination.name}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 3, color: '#6b7280', fontSize: '0.875rem', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOnOutlinedIcon sx={{ fontSize: 14 }} />
                          {destination.location}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 14 }} />
                          {destination.duration}
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4b5563',
                          mb: 3,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {destination.description}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', mb: 2 }}>
                        <span style={{ color: '#6b7280' }}>Best Time:</span>
                        <span style={{ fontWeight: 500 }}>{destination.bestTime}</span>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', mb: 3 }}>
                        <span style={{ color: '#6b7280' }}>Difficulty:</span>
                        <Badge sx={{ bgcolor: difficultyColor.bg, color: difficultyColor.text, fontWeight: 500 }}>
                          {destination.difficulty}
                        </Badge>
                      </Box>

                      <Box sx={{ borderTop: '1px solid #e5e7eb', pt: 2 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {destination.highlights.slice(0, 3).map((h, i) => (
                            <Chip key={i} label={h} size="small" variant="outlined" />
                          ))}
                          {destination.highlights.length > 3 && (
                            <Chip label={`+${destination.highlights.length - 3} more`} size="small" variant="outlined" />
                          )}
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button size="small" variant="outlined"
                            sx={{ border: '0.3px solid #00000050', color: '#000' }}
                            startIcon={<CalendarTodayIcon sx={{ fontSize: 14 }} />}>
                            <Link to={`/destination/book`} style={{ textDecoration: 'none', color: 'inherit' }}>
                              Plan Visit
                            </Link>
                          </Button>
                          <Button size="small" variant="outlined"
                            sx={{ border: '0.3px solid #00000050', color: '#000' }}
                            startIcon={<GroupOutlinedIcon sx={{ fontSize: 14 }} />}>
                            <Link to={`/destination/book`} style={{ textDecoration: 'none', color: 'inherit' }}>
                              Book Tour
                            </Link>
                          </Button>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>

            {sortedDestinations.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 48, color: '#9ca3af', mb: 2 }} />
                <Typography sx={{ color: '#6b7280', mb: 3 }}>
                  No destinations found matching your criteria
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setCategoryFilter("all");
                    setProvinceFilter("all");
                    setDurationFilter("all");
                    setSearchTerm("");
                  }}
                >
                  Clear all filters
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DestinationsPage;