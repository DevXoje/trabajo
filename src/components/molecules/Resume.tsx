import Typography from "@mui/material/Typography";
import { DescriptionProps } from "../../models/Portfolio";

export default function Resume({ props: resume }: DescriptionProps) {
  return (
    <>
      <Typography variant={"h2"}>{resume.title}</Typography>
      <Typography variant={"body1"}>{resume.paragraphs[0]}</Typography>
      <Typography variant={"body2"}>{resume.paragraphs[1]}</Typography>
    </>
  );
}
