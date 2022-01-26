import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

function SeeAbout() {
  return (
    <Typography sx={{mt: 6, mb:3}} color="text.secondary">
      Welcome to the home page for Dyad - A local social network. To see more info about this application, click{' '}
      <NextLink href="/about"> 
        <Link href="/about">here</Link>
      </NextLink>.
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
