import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SkillGalleryProps } from "../../models/Skills";

export default function SkillList({ props: skills }: SkillGalleryProps) {
  /*const skills = [
        {
          icon: <GrWorkshop />,
        },
        {
          icon: <GrWorkshop />,
        },
      ];*/
  const skillsComplete = skills.items.map(({ props: skill }) => (
    <li>
      <Avatar sx={{ bgcolor: "red" }}>{skill.icon}</Avatar>
    </li>
  ));
  return (
    <>
      <Typography variant={"h2"}>Titulo</Typography>
      <ul>
        <Stack direction="row" spacing={2}>
          {skillsComplete}
        </Stack>
      </ul>
    </>
  );
}
