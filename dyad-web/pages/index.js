import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Link from '@mui/material/Link';

function SeeAbout() {
  return (
    <Typography sx={{mt: 6, mb:3}} color="text.secondary">
      Welcome to the home page for Dyad - A local social network. To see more info about this application, click <Link href="/about">here</Link>.
    </Typography>
  )
}

export default function Home() {
  return (
    <Container maxWidth="sm">
      <center>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dyad - A local social network.
        </Typography>
      </Box>
      </center>
      <SeeAbout />
    </Container>
  )
}
