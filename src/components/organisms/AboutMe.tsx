import PhotoPerson from "../molecules/PhotoPerson";
import Resume from "../molecules/Resume";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ContactProps } from "../../models/Portfolio";
import { SkillGalleryProps } from "../../models/Skills";

export default function AboutMe(
  { props: contact }: ContactProps,
  skills: SkillGalleryProps
) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid xs={6} item={true}>
            <PhotoPerson photo={contact.photo} />
          </Grid>
          <Grid xs={6} item={true}>
            <Grid xs={12} item={true}>
              <Resume props={contact.description} />
            </Grid>
            <Grid xs={12} item={true}>
              {/*<SkillList props={skills.props} />*/}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
