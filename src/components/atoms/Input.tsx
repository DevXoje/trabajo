import { Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import { InputProps } from "../../models/Form";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const inputComplete = (variante: string) => {
  let finalInput;
  switch (variante) {
    case "checkbox":
      finalInput = <Checkbox {...label} defaultChecked />;
      break;
    case "textarea":
      finalInput = (
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      );
      break;
    default:
      finalInput = (
        <TextField
          id="outlined-password-input"
          label="Password"
          type={variante}
          autoComplete="current-password"
        />
      );
  }
  return finalInput;
};
export default function Input({ variant }: InputProps) {
  return inputComplete(variant);
}
