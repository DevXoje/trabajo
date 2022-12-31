import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Skeleton } from "@mui/material";
import { AiFillGithub, GrDeploy } from "react-icons/all";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ProjectProps } from "../../models/Project";

export default function ProjectDescription(project: ProjectProps) {
  const hover = () => {
    console.log("dios");
  };
  const leave = () => {
    console.log("adios");
  };
  const project_result = project.title ? (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ flex: 1 }} onMouseEnter={hover} onMouseLeave={leave}>
        <Typography component="h2" variant="h5">
          {project.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {project.date}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {project.description}
        </Typography>
        {/*<Typography variant="subtitle1" color="primary">
          Continue reading...

        </Typography>*/}
        <Tooltip title="Source">
          <IconButton aria-label="go to github" color="primary">
            <AiFillGithub />
          </IconButton>
        </Tooltip>
        <Tooltip title="App">
          <IconButton aria-label="go to project" color="primary">
            <GrDeploy />
          </IconButton>
        </Tooltip>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 160, display: { xs: "none", sm: "block" } }}
        image={project.image.src}
        alt={project.image.alt}
      />
    </Card>
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
  return (
    <Grid item xs={12} md={6}>
      {project_result}
    </Grid>
  );
}
