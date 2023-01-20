import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { haryt100 } from "../data/data.mjs";
import { ynamdarProducts } from "../data/dataYnamdar.mjs";

const backgroundStyle = {
  background: "lightGray",
  width: "100%",
  height: "100vh",
};

const ComparePrice = () => {
  const [value, setValue] = useState(haryt100.data.rows[0]);
  const [inputValue, setInputValue] = useState("");

  const [valueSec, setValueSec] = useState(ynamdarProducts.result.products[0]);
  const [inputValueSec, setInputValueSec] = useState("");

  const [result, setResult] = useState("");

  function comparePrice() {
    if (getPrice(value) > valueSec.p_price_1) {
      setResult(getPrice(value) - valueSec.p_price_1);
    } else {
      setResult(valueSec.p_price_1 - getPrice(value));
    }
  }

  useEffect(() => {
    setResult("");
  }, [value, valueSec]);

  function getValue(option) {
    try {
      return option.name.tm;
    } catch (err) {
      return "";
    }
  }

  function getPrice(option) {
    try {
      return Number(option["sale-price"]) / 100;
    } catch (err) {
      return "";
    }
  }

  function getImage(option) {
    try {
      return option.image.medium;
    } catch (err) {
      return "";
    }
  }
  return (
    <>
      <Box sx={backgroundStyle}>
        <Container maxWidth="lg" sx={{ zIndex: "1" }}>
          <Typography
            sx={{
              textAlign: "center",
              pt: 3,
              pb: 3,
              zIndex: 10,
              color: "#000",
            }}
            variant="h4"
          >
            Compare Prices '100 haryt' and 'Ynamdar' online markets of Ashgabat
          </Typography>
          <Grid container>
            <Grid item sm={4}>
              <Stack direction="row" justifyContent={"center"}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={haryt100.data.rows}
                  value={valueSec}
                  onChange={(event, newValue) => {
                    setValueSec(newValue);
                  }}
                  inputValue={inputValueSec}
                  onInputChange={(event, newInputValue) => {
                    setInputValueSec(newInputValue);
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="100Haryt Products" />
                  )}
                />
              </Stack>
              <Stack pt={3} direction="row" justifyContent={"center"}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea sx={{ background: "#fff", width: 300 }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={valueSec.p_img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography>Ady: {valueSec.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: {valueSec.p_price_1} TMT
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>
            <Grid item sm={4}>
              <Stack direction="row" justifyContent={"center"}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={ynamdarProducts.result.products}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  getOptionLabel={(option) => getValue(option)}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Ynamdar Products" />
                  )}
                />
              </Stack>
              <Stack pt={3} direction="row" justifyContent={"center"}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea sx={{ background: "#fff", width: 300 }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={getImage(value)}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography>Ady: {value.label}</Typography>
                      <Stack direction="row" spacing={0.4} alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          Price:
                        </Typography>
                        <Typography sx={{ color: "orange" }}>
                          {getPrice(value)}
                        </Typography>
                        <Typography sx={{ color: "#000" }}>TMT</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>
            <Grid item sm={4}>
              <Stack direction="row" justifyContent={"center"}>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#EC6323",
                    fontWeight: "bold",
                    lineHeight: 3,
                    width: 300,
                    backgroundColor: "lightGray",
                    "&:hover": {
                      backgroundColor: "lightGray",
                    },
                  }}
                  variant="outlined"
                  onClick={() => comparePrice()}
                >
                  Result
                </Button>
              </Stack>
              <Stack pt={3.5} direction="row" justifyContent={"center"}>
                <Card sx={{ width: 300, height: "auto" }}>
                  <CardActionArea>
                    <CardContent>
                      <Stack spacing={1}>
                        <Stack direction="row" spacing={3}>
                          <Typography>100Haryt : </Typography>
                          <Typography>{valueSec.p_price_1} TMT </Typography>
                        </Stack>
                        <Stack direction="row" spacing={3}>
                          <Typography>Ynamdar : </Typography>
                          <Typography>{getPrice(value)} TMT </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2.2}>
                          <Typography>Difference :</Typography>
                          <Typography>{result} TMT </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ComparePrice;
