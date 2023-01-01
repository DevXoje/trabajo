import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ProjectGalleryProps } from "../../models/Project";

export default function ProjectGallery({
  props: projectGallery,
}: ProjectGalleryProps) {
  /*const projectsComplete = projects.map((project) => (
    <ProjectDescription project={project} />
  ));*/
  const projectsComplete = <div>algo</div>;
  return (
    <>
      <Container maxWidth="lg">
        {/*<Header title="Blog" sections={sections} />*/}

        <Grid container spacing={4}>
          {projectsComplete}
        </Grid>

        <Grid container spacing={5} sx={{ mt: 3 }}>
          {/*<Main title="From the firehose" posts={posts} />*/}
          {/*<Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />*/}
        </Grid>
      </Container>

      {/*<Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />*/}
    </>
  );
}
