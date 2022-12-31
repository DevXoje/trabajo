import Avatar from "@mui/material/Avatar";
import { GrWorkshop } from "react-icons/all";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SkillList() {
  const skills = [
    {
      icon: <GrWorkshop />,
    },
    {
      icon: <GrWorkshop />,
    },
  ];
  const skillsComplete = skills.map((skill) => (
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
