import Typography from "@mui/material/Typography";
import * as React from "react";
import { SkillProps } from "../../models/Skills";
import Grid from "@mui/material/Grid";

export default function SoftSkill({ props: skill }: SkillProps) {
  return (
    <Grid xs={4} item={true}>
      {skill.icon}
      <Typography variant="h3">{skill.title}</Typography>
      <Typography variant="body1">{skill.body}</Typography>
    </Grid>
  );
}
