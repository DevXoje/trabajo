import { LinkProps } from "../../models/Link";
function Link({ text, route }: LinkProps) {
  return (
    <>
      <a href={route}>{text}</a>
    </>
  );
}

export default Link;
