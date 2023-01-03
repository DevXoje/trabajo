import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { HeroProps } from "../../models/Hero";
import Card from "../atoms/Card";
import { SxProps, Theme } from "@mui/material";
import Link from "../atoms/Link";
import { ContactProps } from "../../models/Portfolio";

const hero_content: HeroProps = {
  props: {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: {
      src: "https://source.unsplash.com/random",
      alt: "imagen con motivo tecnologico",
    },
    link: {
      text: "Link to guapo",
      route: "hacia/casa",
    },
  },
};
export default function Hero({ props: contact }: ContactProps) {
  const { image, link, description, title } = hero_content.props;
  const height = { min: "90vh" };
  const wrapperSX: SxProps<Theme> = {
    position: "relative",
    backgroundColor: "grey.800",
    color: "#fff",
    mb: 4,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${image.src})`,
    minHeight: height.min,
    p: 5,
  };
  const boxSX: SxProps<Theme> = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  };
  const gridSX: SxProps<Theme> = {
    minHeight: height.min,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  };
  const textContentSX: SxProps<Theme> = {
    position: "relative",
    p: { xs: 3, md: 6 },
    pr: { md: 0 },
  };
  return (
    <Paper sx={wrapperSX}>
      {/* <Box sx={boxSX} />*/}
      <Grid container sx={gridSX}>
        <img style={{ display: "none" }} src={image.src} alt={image.alt} />

        <Grid item md={5}>
          <Box sx={textContentSX}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Link props={link} />
            {/*variant="subtitle1" */}
          </Box>
        </Grid>
        <Grid item md={5}>
          <Card props={contact} />
        </Grid>
      </Grid>
    </Paper>
  );
}
