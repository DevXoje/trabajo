import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
type Photo = {
  photo: string;
};
export default function PhotoPerson({ photo }: Photo) {
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
            src={photo}
            style={{ width: "100%", height: "auto" }}
            alt={"algo"}
          />
        </Paper>
      </Box>
    </>
  );
}
