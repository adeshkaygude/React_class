import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Reusable Item Component
const Item = ({ title, body }) => (
  <Box
    sx={{
      p: {xs:2,md:4},
      "&:hover": {
        bgcolor: "secondary.main",
      },
    }}
  >
    <h3>{title}</h3>
    <p>{body}</p>
  </Box>
);

const MuiLayout = () => {
  return (
    <>
      <h3>MUI Layout</h3>
      <hr />

      <Container>
        {/* Grid Layout */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item title="Sample Title 1" body="Sample body content 1" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item title="Sample Title 2" body="Sample body content 2" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item title="Sample Title 3" body="Sample body content 3" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item title="Sample Title 4" body="Sample body content 4" />
          </Grid>
        </Grid>

        <hr />

        {/* Stack Layout */}
        <Stack spacing={2}>
          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
            Item Value 1
          </Box>

          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
            Item Value 2
          </Box>

          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
            Item Value 3
          </Box>

          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
            Item Value 4
          </Box>

          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
            Item Value 5
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default MuiLayout;
