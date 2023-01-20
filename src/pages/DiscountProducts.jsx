import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { aksiyaYnamdar } from "../data/aksiyaYnamdar.mjs";
import Marquee from "react-fast-marquee";

let aksiyaData = aksiyaYnamdar.result.products;

const backgroundStyle = {
  background: "lightGray",
  width: "100%",
  minHeight: "100vh",
};

const words = [
  " Aksiyada duran harytlar",
  "Merchandise on sale",
  "Товар в продаже",
];

const DiscountProducts = () => {
  return (
    <>
      <Box sx={backgroundStyle}>
        <Container maxWidth="lg">
          <Box pt={5} pb={5}>
            <Stack direction="row" pb={3} justifyContent={"center"}>
              <Marquee speed={40}>
                {words.map((item, i) => {
                  return (
                    <Typography
                      key={`marque_key${i}`}
                      variant="h3"
                      sx={{ color: "#EC6323", paddingLeft: "200px" }}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Marquee>
            </Stack>
            <Grid container spacing={2}>
              {aksiyaData.map((item, i) => {
                return (
                  <Grid item sm={3} key={`aksiya_ynamdar_data_key${i}`}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={item.image.medium}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Stack spacing={1}>
                            <Tooltip title={item.name.tm}>
                              <Typography>
                                {item.name.tm.slice(0, 20)}...
                              </Typography>
                            </Tooltip>
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                            >
                              <Typography sx={{ color: "#EC6323" }}>
                                {item["sale-price"] / 100}
                              </Typography>
                              <Typography
                                sx={{
                                  textDecoration: "line-through",
                                  color: "gray",
                                }}
                              >
                                {item["old-price"] === item["sale-price"]
                                  ? ""
                                  : item["old-price"] / 100}
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DiscountProducts;
