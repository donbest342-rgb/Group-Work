import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Chip, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Tab, Tabs, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// === YOUR ORIGINAL DATA (UNCHANGED) ===
const destinationData = {
  sigiriya: {
    name: "Sigiriya Rock Fortress",
    location: "Central Province, Sri Lanka",
    description: "Sigiriya, also known as Lion Rock, is an ancient rock fortress and UNESCO World Heritage site rising dramatically from the central plains of Sri Lanka. This archaeological wonder features stunning frescoes, impressive gardens, and a remarkable palace complex built by King Kashyapa in the 5th century.",
    images: [
      "https://images.unsplash.com/photo-1524508570421-362500b7fd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdpcml5YSUyMHJvY2slMjBzcmklMjBsYW5rYSUyMGFlcmlhbHxlbnwxfHx8fDE3NTU5Mzk0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc1NTkzOTQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    rating: 4.8,
    category: "Historical",
    duration: "Half day",
    bestTime: "December to April",
    difficulty: "Moderate",
    entryFee: "$30",
    highlights: [
      "Ancient frescoes of celestial maidens",
      "Mirror Wall with ancient graffiti",
      "Lion's Gate entrance",
      "Royal palace ruins",
      "Water gardens and terraces",
      "Panoramic views from the summit"
    ],
    activities: [
      "Rock climbing and hiking",
      "Photography tours",
      "Sunrise/sunset viewing",
      "Archaeological exploration",
      "Cultural heritage tours",
      "Bird watching"
    ],
    nearbyAttractions: [
      "Dambulla Cave Temple (20 km)",
      "Pidurangala Rock (2 km)",
      "Minneriya National Park (25 km)",
      "Polonnaruwa Ancient City (50 km)"
    ],
    weather: {
      temperature: "24-32°C",
      season: "Dry Season",
      rainfall: "Low"
    },
    facilities: [
      "Visitor Center",
      "Guided Tours",
      "Parking",
      "Restrooms",
      "Souvenir Shop",
      "First Aid"
    ]
  }
};

// Fallback Image Component (UNCHANGED)
const ImageWithFallback = ({ src, alt, style }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      style={{
        ...style,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        transition: 'transform 0.3s ease',
      }}
      onError={() => setImgSrc('https://via.placeholder.com/600x400?text=Image+Not+Found')}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    />
  );
};

export function DestinationPage({ destination = 'sigiriya' }) {
  const onNavigate = useNavigate();
  const data = destinationData[destination] || destinationData.sigiriya;
  const [tabValue, setTabValue] = useState('overview');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', height: { xs: 384, md: 500 } }}>
        <ImageWithFallback
          src={data.images[0]}
          alt={data.name}
          style={{ width: '100%', height: '100%' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            px: 2,
          }}
        >
          <Box sx={{ maxWidth: '4xl', mx: 'auto' }}>
            <Chip
              label={data.category}
              sx={{
                mb: 2,
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            />
            <Typography variant="h4" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 2 }}>
              {data.name}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', fontSize: '1.125rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <span>{data.location}</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarBorderIcon sx={{ color: '#fdd835', fontSize: 20 }} />
                <span>{data.rating}</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ fontSize: 20 }} />
                <span>{data.duration}</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Content + Sidebar */}
      <Box
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4 },
          py: 6,
          // Make wrapper scrollable for sticky to work
          minHeight: { lg: 'calc(100vh - 160px)' }, // Adjust 160px based on hero height
          overflowY: 'auto',
        }}
      >
        <Grid container spacing={4} sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          {/* LEFT: Tabs + Content */}
          <Grid
            item
            xs={12}
            lg={8}
            xl={7}
            sx={{
              display: 'flex',
              width: '70%',
              flexDirection: 'column',
              minHeight: { lg: '100%' }, // Stretch to match sidebar
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="success"
              sx={{ mb: 3 }}
            >
              <Tab
                label="Overview"
                value="overview"
                sx={{ '&.Mui-selected': { color: '#16a34a' } }}
              />
              <Tab
                label="Activities"
                value="activities"
                sx={{ '&.Mui-selected': { color: '#16a34a' } }}
              />
              <Tab
                label="Gallery"
                value="gallery"
                sx={{ '&.Mui-selected': { color: '#16a34a' } }}
              />
              <Tab
                label="Planning"
                value="planning"
                sx={{ '&.Mui-selected': { color: '#16a34a' } }}
              />
            </Tabs>

            {/* Overview */}
            {tabValue === 'overview' && (
              <Card sx={{ width: '100%' }}>
                <CardHeader title={`About ${data.name}`} />
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.7 }}>
                    {data.description}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Key Highlights</Typography>
                      <List>
                        {data.highlights.map((h, i) => (
                          <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <StarBorderIcon sx={{ color: '#16a34a', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary={h} sx={{ color: '#4b5563' }} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Nearby Attractions</Typography>
                      <List>
                        {data.nearbyAttractions.map((a, i) => (
                          <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <LocationOnOutlinedIcon sx={{ color: '#16a34a', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary={a} sx={{ color: '#4b5563' }} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}

            {/* Activities */}
            {tabValue === 'activities' && (
              <Card sx={{ width: '100%' }}>
                <CardHeader title="Things to Do" />
                <CardContent>
                  <Grid container spacing={2}>
                    {data.activities.map((act, i) => (
                      <Grid item xs={12} md={6} key={i}>
                        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#f3f4f6' }}>
                          <CameraAltOutlinedIcon sx={{ color: '#16a34a' }} />
                          <Typography>{act}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}

            {/* Gallery */}
            {tabValue === 'gallery' && (
              <Card sx={{ width: '100%' }}>
                <CardHeader title="Photo Gallery" />
                <CardContent>
                  <Grid container spacing={2}>
                    {data.images.map((img, i) => (
                      <Grid item xs={12} md={6} key={i}>
                        <Box sx={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 2 }}>
                          <ImageWithFallback src={img} alt={`${data.name} - ${i + 1}`} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}

            {/* Planning */}
            {tabValue === 'planning' && (
              <Grid container spacing={4} sx={{ width: '100%' }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Getting There" />
                    <CardContent sx={{ '& > div + div': { mt: 3 } }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <FlightIcon sx={{ color: '#16a34a' }} />
                        <div>
                          <Typography fontWeight="medium">By Air</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Fly to Bandaranaike International Airport, then 3-hour drive
                          </Typography>
                        </div>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <DirectionsCarIcon sx={{ color: '#16a34a' }} />
                        <div>
                          <Typography fontWeight="medium">By Road</Typography>
                          <Typography variant="body2" color="text.secondary">
                            4-hour drive from Colombo, taxi or rental car available
                          </Typography>
                        </div>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Facilities" />
                    <CardContent>
                      <Grid container spacing={1}>
                        {data.facilities.map((f, i) => (
                          <Grid item xs={6} key={i}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <ShieldOutlinedIcon sx={{ fontSize: 18, color: '#16a34a' }} />
                              <Typography variant="body2">{f}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Grid>

          {/* RIGHT: Sticky Sidebar */}
          <Grid
            item
            xs={12}
            lg={4}
            xl={5}
            sx={{
              position: { lg: 'sticky' },
              top: { lg: 24 },
              alignSelf: 'start',
              mt: { xs: 4, lg: 0 },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Quick Info */}
              <Card>
                <CardHeader title="Quick Info" />
                <CardContent sx={{ '& > div': { display: 'flex', justifyContent: 'space-between', mb: 1.5 } }}>
                  <div><Typography color="text.secondary">Entry Fee</Typography><Typography fontWeight="bold">{data.entryFee}</Typography></div>
                  <div><Typography color="text.secondary">Best Time</Typography><Typography fontWeight="bold">{data.bestTime}</Typography></div>
                  <div><Typography color="text.secondary">Difficulty</Typography><Chip label={data.difficulty} size="small" /></div>
                  <div><Typography color="text.secondary">Duration</Typography><Typography fontWeight="bold">{data.duration}</Typography></div>
                </CardContent>
              </Card>

              {/* Weather */}
              <Card>
                <CardHeader title="Current Weather" />
                <CardContent sx={{ '& > div + div': { mt: 2 } }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <WbSunnyIcon sx={{ color: '#f97316' }} />
                    <div>
                      <Typography fontWeight="medium">Temperature</Typography>
                      <Typography variant="body2" color="text.secondary">{data.weather.temperature}</Typography>
                    </div>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <OpacityIcon sx={{ color: '#3b82f6' }} />
                    <div>
                      <Typography fontWeight="medium">Rainfall</Typography>
                      <Typography variant="body2" color="text.secondary">{data.weather.rainfall}</Typography>
                    </div>
                  </Box>
                </CardContent>
              </Card>

              {/* Book Now */}
              <Card>
                <CardHeader title="Plan Your Visit" />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button variant="contained" color="success" fullWidth startIcon={<CalendarTodayIcon />}>
                    Book Tour
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<GroupOutlinedIcon />}>
                    Find Guide
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<LocationOnOutlinedIcon />}>
                    Nearby Hotels
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Back Button */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<ChevronLeftIcon />}
            onClick={() => onNavigate('/destination')}
            sx={{ borderColor: '#16a34a', color: '#16a34a', '&:hover': { backgroundColor: '#f0fdf4' } }}
          >
            Back to All Destinations
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DestinationPage;