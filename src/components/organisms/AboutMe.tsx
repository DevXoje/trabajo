import PhotoPerson from "../molecules/PhotoPerson";
import Resume from "../molecules/Resume";
import SkillList from "../molecules/SkillList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function AboutMe() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid xs={6}>
            <PhotoPerson />
          </Grid>
          <Grid xs={6}>
            <Grid xs={12}>
              <Resume />
            </Grid>
            <Grid xs={12}>
              <SkillList />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
