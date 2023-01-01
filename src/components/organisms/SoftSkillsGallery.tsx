import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SoftSkill from "../molecules/SoftSkill";
import Typography from "@mui/material/Typography";
import { SkillProps, SkillGalleryProps } from "../../models/Skills";
import * as React from "react";

export default function SoftSkillsGallery({
  props: skillGallery,
}: SkillGalleryProps) {
  const softSkillsComplete = skillGallery.items.map((skill: SkillProps) => (
    <SoftSkill key={skill.props.title} props={skill.props} />
  ));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant={"h2"}>{skillGallery.title}</Typography>
      <Grid container spacing={4}>
        {softSkillsComplete}
      </Grid>
    </Box>
  );
}
