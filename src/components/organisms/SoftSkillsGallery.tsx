import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SoftSkill from "../molecules/SoftSkill";
import Typography from "@mui/material/Typography";
import { Skill, SkillGallery } from "../../models/Skills";
import * as React from "react";

export default function SoftSkillsGallery({ skills, title }: SkillGallery) {
  const softSkillsComplete = skills.map(({ title, body, icon }: Skill) => (
    <SoftSkill key={title} title={title} body={body} icon={icon} />
  ));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant={"h2"}>{title}</Typography>
      <Grid container spacing={4}>
        {softSkillsComplete}
      </Grid>
    </Box>
  );
}
