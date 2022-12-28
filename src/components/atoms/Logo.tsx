interface LogoProps {
  backgroundColor: string;
  label: string;
}

function Logo({ backgroundColor, label }: LogoProps) {
  return <img src={"https://via.placeholder.com/50"} />;
}

export default Logo;
