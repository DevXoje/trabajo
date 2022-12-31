import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import personImg from "../../assets/person.png";
export default function PhotoPerson() {
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
            src={personImg}
            style={{ width: "100%", height: "auto" }}
            alt={"algo"}
          />
        </Paper>
      </Box>
    </>
  );
}
