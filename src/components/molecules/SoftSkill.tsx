import Typography from "@mui/material/Typography";
import * as React from "react";
import { FcElectroDevices } from "react-icons/all";
import { Skill } from "../../models/Skills";
import Grid from "@mui/material/Grid";

export default function SoftSkill({ title, body, icon }: Skill) {
  return (
    <Grid xs={4} item={true}>
      {icon}
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </Grid>
  );
}
