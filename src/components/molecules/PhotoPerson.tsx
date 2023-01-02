import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { PhotoPersonProps } from "../../models/Image";

export default function PhotoPerson({ photo }: PhotoPersonProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={24}>
          <img
            src={photo.src}
            style={{ width: "100%", height: "auto" }}
            alt={photo.alt}
          />
        </Paper>
      </Box>
    </>
  );
}
