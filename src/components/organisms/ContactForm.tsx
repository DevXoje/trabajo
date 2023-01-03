import Box from "@mui/material/Box";
import Field from "../molecules/Field";
import { Fab, Stack } from "@mui/material";
import { BiMailSend } from "react-icons/all";
export default function ContactForm() {
  return (
    <Box
      component="form"
      /*sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}*/
      noValidate
      autoComplete="off"
      id={"formContact"}
      sx={{
        maxWidth: "400px",
      }}
    >
      <Stack spacing={4}>
        <Field variant={"text"} />
        <Field variant={"textarea"} />

        <Field variant={"checkbox"} />
        <Fab variant="extended">
          <BiMailSend size={40} />
          Submit
        </Fab>
      </Stack>
    </Box>
  );
}
