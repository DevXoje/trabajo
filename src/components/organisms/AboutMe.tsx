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
          <Grid xs={6} item={true}>
            <PhotoPerson />
          </Grid>
          <Grid xs={6} item={true}>
            <Grid xs={12} item={true}>
              <Resume />
            </Grid>
            <Grid xs={12} item={true}>
              {/*<SkillList />*/}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
