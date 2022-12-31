import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SoftSkill from "../molecules/SoftSkill";
import Typography from "@mui/material/Typography";

export default function SoftSkillsGallery() {
  const softSkills = [{}, {}, {}];
  const softSkillsComplete = softSkills.map((sSkill) => (
    <>
      <Grid xs={4}>
        <SoftSkill />
      </Grid>
    </>
  ));
  return (
    <>
      <Typography variant={"h2"}>titulo</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {softSkillsComplete}
        </Grid>
      </Box>
    </>
  );
}
