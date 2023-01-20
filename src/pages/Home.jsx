import React from "react";
import { Avatar, Box, Button, Container, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Typewriter from "typewriter-effect";
import { slideData } from "../data/slidedata.mjs";
import { slideImg, typeWriterStyle } from "../style/style.mjs";

const homePage = {
  backgroundColor: "#EC6323",
  width: "100%",
  height: "100vh",
};

const avatarImg = {
  width: 250,
  height: 250,
};

const linkBtn = {
  textTransform: "none",
  color: "#EC6323",
  fontWeight: "bold",
  lineHeight: 3,
  width: 300,
  backgroundColor: "lightGray",

  "&:hover": {
    backgroundColor: "lightGray",
  },
};
const Home = () => {
  return (
    <Box sx={homePage} className="homaPageAnimation">
      <Container>
        <Stack direction="row" pt={3}>
          <div style={typeWriterStyle}>
            <Typewriter
              options={{
                strings: [
                  "Merjen Bakyyeva",
                  "Compare Price Diplom Project",
                  "Oguz han Engineering and Technology University",
                ],
                autoStart: true,
                loop: true,
                fontSize: 25,
              }}
            />
          </div>
        </Stack>
        <Grid container pt={15}>
          <Grid item sm={6}>
            <Avatar sx={avatarImg} src="/images/home.jpg" />
          </Grid>
          <Grid item sm={6}>
            <OwlCarousel
              className="owl-theme"
              loop={false}
              dots={false}
              autoplay={true}
              items={1}
            >
              {slideData.map((item, i) => {
                return (
                  <div key={`slide_images_key${i}`} class="item">
                    <img style={slideImg} src={item.img} alt={item.alt} />
                  </div>
                );
              })}
            </OwlCarousel>
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent={"center"} pt={3}>
          <Link to="/comparePrice" style={{ textDecoration: "none" }}>
            <Button variant="outlined" className="animationBtn" sx={linkBtn}>
              Compare Price Products
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
