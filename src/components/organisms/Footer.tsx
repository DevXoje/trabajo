interface FooterProps {
    backgroundColor: string,
    label: string
}

function Footer({backgroundColor, label}: FooterProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default Footer;
