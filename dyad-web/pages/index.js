import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles["page-root"]}>
      <Container maxWidth="sm">
        <center>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Dyad - A local social network.
            </Typography>
          </Box>
        </center>
        <p>
          Welcome to the home page for Dyad - A local social network. To see
          more info about this application, click{" "}
          <NextLink href="/about">
            <Link href="/about">here</Link>
          </NextLink>
          .
        </p>
        <center>
          <img
            src={require("../public/assets/constructioncat.jpeg")}
            alt=""
          />
        </center>
      </Container>
    </div>
  );
}
