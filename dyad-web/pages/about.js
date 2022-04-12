import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import styles from "../styles/About.module.css";
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator, TimelineOppositeContent } from "@mui/lab";
import Typography from '@mui/material/Typography';
import ArrowCircleDownOutlined from '@mui/icons-material/ArrowCircleDownOutlined';

let events = [
  //Event 1
  {
    title: 'Project Design',
    event: 'The initial design for Dyad was pitched to instructors and accepted. Dyad will use Bluetooth P2P to connect users as a new type of social media.',
    date: 'October 2021',
  },
  //Event 2
  {
    title: 'Project Prototype',
    event: 'The first prototype of Dyad was completed. The prototype had a login screen with working authentication. It brought the users to the feed page.',
    date: 'November 2021',
  },
  //Event 3
  {
    title: 'First Project Demo',
    event: 'The prototype was demo\'d by the team. It was advised that the team implement more features, but it was looking good so far.',
    date: 'December 2021',
  },
  //Event 4
  {
    title: 'Finishing the UI',
    event: 'The UI of the application was completed. The application is presented in a Nord theme, and had a UI for the feed, messaging, and user profiles.',
    date: 'February 2022',
  },
  //Event 5
  {
    title: 'Change of plans',
    event: 'After the mid-semester demo, the team decided to switch from Bluetooth P2P connection to city-based networking using geolocation and geo-IP.',
    date: 'March 2022',
  },
  //Event 6
  {
    title: 'Networking',
    event: 'The networking was the most difficult aspect of the project, but was completed using geolocation and geo-IP. Users on the application will now create & see posts from within their own city.',
    date: 'March-April 2022',
  },
  //Event 7
  {
    title: 'Finishing touches',
    event: 'The team went through fixing various bugs, such as displaying and transferring images using gRPC. More features were added to the application, such as a map to show users where posts come from, and comments on posts. A desktop application also was prototyped.',
    date: 'April 2022',
  },
  //Event 8
  {
    title: 'Innevation Day',
    event: 'The team presented their project at UNR\'s Innevation Day, with the 25+ projects of their peers.',
    date: 'May 2022',
  },

]

export default function About() {
  return (
    <div className={styles["about-wrapper"]}>
        <center>
          <h1 className={styles["page-title"]}>Dyad - About</h1>
        </center>

      <center>
        <div className={styles["body-wrapper"]}>
          <div className={styles["team-title"]}>
            <center>
              <h1>Who We Are</h1>
            </center>
          </div>
          <div className={styles["team-body"]}>
            <p>
              This project was created for CS 426 Senior Projects, during the
              Spring 2022 semester at the University of Nevada, Reno CSE
              Department. We are part of team 9.
            </p>
            <div className={styles["team-members"]}>
              <center>
                <h2> Members </h2>
                <Stack spacing={2} alignItems="center">
                  <Box>Jakob Delossantos</Box>
                  <Box>Prim Wandeevong</Box>
                  <Box>Sam Gerard</Box>
                  <Box>Vincent Pham</Box>
                  <Box>Zachary Newell (Advisor)</Box>
                </Stack>
              </center>
              <center>
                <h2> Instructors </h2>
                <Stack spacing={2} alignItems="center">
                  <Box>Devrin Lee</Box>
                  <Box>Dave Feil-Seifer</Box>
                  <Box>Vinh Le</Box>
                </Stack>
              </center>
            </div>
          </div>
          <div className={styles["description-title"]}>
            <h1>What is Dyad?</h1>
          </div>
          <div className={styles["description-body"]}>
            <p>
              Social networks are commonly associated with distraction and
              division. Dyad, a local social network, aims to emphasize the
              transitory behavior of human interaction by placing restric- tions
              on both the geographical distance and the permanence of posts. In
              order to encourage user interaction, it will connect users that
              are nearby like a mesh network that requires users to be near each
              other to even transfer data between devices. The purpose of this
              is to fuel conversation between users that are already in the same
              area. It could be getting updates at a large venue during an
              concert, or sharing events in a classroom. Another concern with
              social networks is their privacy. <br/>
              Most messages and posts on
              social media can be retrieved by the relevant companies even when
              they’ve been deleted. With our peer-to-peer network implementation
              of Dyad, there will be no user data on offsite servers and
              personal information will be encrypted as much as possible. Dyad
              will try to be what current major social networks are not while
              still doing basically the same thing. We have a huge focus on
              reliability and security and giving our users the power to control
              their own data, which is not the case of the most prominent social
              networking applications today.
            </p>
            <div className={styles["description-title"]}>
              <h1>Project Related Resources</h1>
            </div>
            <div className={styles["description-body"]}>
              <p>
                <ul>
                  <li>
                    <a href="https://unr.primo.exlibrisgroup.com/permalink/01UNR_INST/adtd5q/cdi_proquest_journals_2568002148">
                      &quot;Should I Post or Ghost?&quot;: Examining how privacy
                      concerns impact social media engagement in US consumers
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://unr.primo.exlibrisgroup.com/permalink/01UNR_INST/adtd5q/cdi_crossref_primary_10_1016_j_jss_2018_08_028">
                      Software engineering process models for mobile app
                      development: A systematic literature review
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://www.inc.com/john-rampton/how-to-create-powerful-social-network-platform-in-.html">
                      How to Create a Powerful Social Network Platform in 8
                      Steps
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://wiki.archlinux.org/">ArchWiki</a>
                  </li>
                  <li>
                    <a href="https://flutter.dev/">Flutter</a>
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles["description-title"]}>
              <h1>Project Progress</h1>
              <Timeline position="alternate">
                {/* Event 1 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[0].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[0].date}
                    </Typography>
                    <Typography>
                      {events[0].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem> 
                {/* Event 2 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[1].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[1].date}
                    </Typography>
                    <Typography>
                      {events[1].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 3 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[2].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[2].date}
                    </Typography>
                    <Typography>
                      {events[2].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 4 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[3].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[3].date}
                    </Typography>
                    <Typography>
                      {events[3].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 5 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[4].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[4].date}
                    </Typography>
                    <Typography>
                      {events[4].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 6 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[5].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[5].date}
                    </Typography>
                    <Typography>
                      {events[5].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 7 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[6].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[6].date}
                    </Typography>
                    <Typography>
                      {events[6].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* Event 8 */}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <ArrowCircleDownOutlined />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h5" component="span">
                      {events[7].title}
                      <br/>
                    </Typography>
                    <Typography variant="h9" component="span" color="text.secondary">
                      {events[7].date}
                    </Typography>
                    <Typography>
                      {events[7].event}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className={styles["description-title"]}>
              <h1>Project Poster & Video</h1>
            </div>
          </div>
        </div>
      </center>
    </div>
    
  );
}
