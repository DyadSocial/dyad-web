import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function Members () {
  return (
    <div>
      <Stack spacing={2} alignItems="left">
        <Box>Jakob Delossantos</Box>
        <Box>Prim Wandeevong</Box>
        <Box>Sam Gerard</Box>
        <Box>Vincent Pham</Box>
        <Box>Along with advisor Zachary Newell</Box>
      </Stack>
    </div>
  )
}

function Instructors () {
  return (
    <div>
      <Stack spacing={2} alignItems="center" direction="row">
        <Box><b>Instructors: </b></Box>
        <Box>Devrin Lee</Box>
        <Box>Dave Feil-Seifer</Box>
        <Box>Vinh Le</Box>
      </Stack>
    </div>
  )
}

export default function About() {
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: "Robotto",
        width: "100vw",
        left: "0",
        top: "0",
        backgroundColor: '#14279B',
      }}
      >
      <Container maxWidth="sm">
        <center>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dyad - About
          </Typography>
        </Box>
        </center>
      </Container>

      <div className={styles["team-title"]}>
        <h1>Team Information</h1>
      </div>

      <div className={styles["team-body"]}>
        <p>
          This project was created for CS 426 Senior Projects, during the Spring 2022 semester at the University of Nevada, Reno CSE Department. 
        </p>
        <h2>Who we are...</h2>
        <p>
          We are Team 09, consisting of:
        </p>
        <motion.div
        initial={{ opacity: 0, right: "20%" }}
        animate={{ opacity: 1, right: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        >
          <p><Members /></p>
        </motion.div>

        <p><Instructors /></p>
      </div>

      <div className={styles["description-title"]}>
        <h1>What is Dyad?</h1>
      </div>
      <div className={styles["description-body"]}>
        <motion.div
          initial={{ opacity: 0, right: "20%" }}
          animate={{ opacity: 1, right: 0 }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <p>
          Social networks are commonly associated with distraction and division. Dyad, a local social
          network, aims to emphasize the transitory behavior of human interaction by placing restric-
          tions on both the geographical distance and the permanence of posts. In order to encourage
          user interaction, it will connect users that are nearby like a mesh network that requires users
          to be near each other to even transfer data between devices. The purpose of this is to fuel
          conversation between users that are already in the same area. It could be getting updates at a
          large venue during an concert, or sharing events in a classroom.
          Another concern with social networks is their privacy. Most messages and posts on social
          media can be retrieved by the relevant companies even when they’ve been deleted. With our
          peer-to-peer network implementation of Dyad, there will be no user data on offsite servers and
          personal information will be encrypted as much as possible. Dyad will try to be what current major social networks are not while still doing basically the
          same thing. We have a huge focus on reliability and security and giving our users the power to
          control their own data, which is not the case of the most prominent social networking applications today.
          </p>
        </motion.div
        
        >
      </div>

    </div>

    //TODO: Project related resources part of Canvas page
  )
}
