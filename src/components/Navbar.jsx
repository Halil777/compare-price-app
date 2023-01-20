import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { FormControl, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { dataLink } from "../data/dataLink.mjs";
import { logo } from "../style/style.mjs";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import i18n from "../utils/i18n.mjs";
import { useTranslation } from "react-i18next";

const pageBtn = {
  textTransform: "none",
  textDecoration: "none",
  fontSize: "17px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [lng, setLng] = React.useState("tm");

  useEffect(() => {
    if (lng === "tm" || lng === "" || lng === undefined) {
      i18n.changeLanguage("tm");
      localStorage.setItem("lng", "tm");
    } else if (lng === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
    } else {
      i18n.changeLanguage("ru");
      localStorage.setItem("lng", "ru");
    }
  }, [lng]);

  const handleChange = (event) => {
    setLng(event.target.value);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#EC6323" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack direction={"row"} pr={2} spacing={2}>
              <img src="/images/logo.png" alt="logo" style={logo} />
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {dataLink.map((item, i) => {
                return (
                  <Link
                    to={item.link}
                    style={{
                      textDecoration:
                        item.link === location.pathname ? "underline" : "none",
                      textDecorationColor:
                        item.link === location.pathname ? "#008060" : "",
                      textUnderlineOffset:
                        item.link === location.pathname ? "29px" : "",
                      textDecorationThickness:
                        item.link === location.pathname ? "3px" : "",
                    }}
                  >
                    <Button
                      sx={{
                        ...pageBtn,
                        color:
                          item.link === location.pathname
                            ? "#fff"
                            : "lightGray",
                      }}
                    >
                      {t(item.title)}
                    </Button>
                  </Link>
                );
              })}
            </Box>
            <Stack direction="row" pr={5}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Box sx={{ flexGrow: 0 }}>
              <Stack direction={"row"} alignItems="center" spacing={3}>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                  }}
                >
                  <Select
                    sx={{ pl: 2, color: "lightGray" }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lng}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{ IconComponent: () => null }}
                  >
                    <MenuItem value={"tm"}>TM</MenuItem>
                    <MenuItem value={"en"}>Eng</MenuItem>
                    <MenuItem value={"ru"}>RU </MenuItem>
                  </Select>
                </FormControl>
                <Tooltip title="Merjen Bakyyeva">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="M M" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
