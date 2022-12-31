import Input from "../atoms/Input";
import { FieldProps } from "../../models/Form";

function Field({ variant }: FieldProps) {
  return (
    <>
      <Input variant={variant} />
    </>
  );
}

export default Field;
